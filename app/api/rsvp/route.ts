import { NextResponse } from "next/server";

/* Format lengkap yang dikirim ke spreadsheet: +628xxxxxxxx (8–13 digit setelah +62). */
const PHONE_RE = /^\+628\d{7,12}$/;

function bad(error: string, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(req: Request) {
  const url = process.env.APPS_SCRIPT_URL;
  if (!url) {
    return bad(
      "Konfigurasi server belum lengkap: APPS_SCRIPT_URL belum diatur.",
      500,
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return bad("Payload tidak valid.");
  }

  const { nama, kehadiran, telepon } = (body ?? {}) as Record<string, unknown>;

  if (typeof nama !== "string" || !nama.trim()) {
    return bad("Nama lengkap wajib diisi.");
  }
  if (kehadiran !== "Hadir" && kehadiran !== "Tidak Hadir") {
    return bad("Kehadiran harus 'Hadir' atau 'Tidak Hadir'.");
  }
  if (typeof telepon !== "string" || !PHONE_RE.test(telepon)) {
    return bad("Format nomor telepon tidak valid.");
  }

  try {
    /* Content-Type text/plain agar Apps Script menerima body mentah tanpa preflight. */
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        nama: nama.trim().slice(0, 200),
        kehadiran,
        telepon,
      }),
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`Apps Script merespons status ${res.status}`);
    }

    const text = await res.text();
    let data: { ok?: boolean; error?: string } | null = null;
    try {
      data = JSON.parse(text);
    } catch {
      /* Apps Script kadang membalas HTML setelah redirect; anggap sukses bila status 200. */
    }
    if (data && data.ok === false) {
      throw new Error(data.error || "Apps Script menolak data.");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Gagal meneruskan RSVP ke Apps Script:", err);
    return bad("Gagal menyimpan ke spreadsheet. Coba beberapa saat lagi.", 502);
  }
}
