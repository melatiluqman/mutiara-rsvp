"use client";

import { useState } from "react";

type Kehadiran = "Hadir" | "Tidak Hadir";
type Status = "idle" | "loading" | "success" | "error";
type FieldErrors = { nama?: string; kehadiran?: string; telepon?: string };

/* Nomor ponsel Indonesia setelah +62: diawali 8, total 8–13 digit. */
const PHONE_RE = /^8\d{7,12}$/;

export default function RsvpForm() {
  const [nama, setNama] = useState("");
  const [kehadiran, setKehadiran] = useState<Kehadiran | "">("");
  const [telepon, setTelepon] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState<{
    nama: string;
    kehadiran: Kehadiran;
  } | null>(null);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!nama.trim()) errs.nama = "Nama lengkap wajib diisi.";
    if (!kehadiran) errs.kehadiran = "Pilih salah satu: Hadir atau Tidak Hadir.";
    if (!telepon) {
      errs.telepon = "Nomor telepon wajib diisi.";
    } else if (!PHONE_RE.test(telepon)) {
      errs.telepon =
        "Format nomor tidak valid. Awali dengan 8 (tanpa 0), 8–13 digit. Contoh: 81234567890.";
    }
    return errs;
  }

  function handlePhoneChange(value: string) {
    /* Hanya angka; angka 0 di depan dibuang otomatis (kode negara sudah +62). */
    setTelepon(value.replace(/\D/g, "").replace(/^0+/, "").slice(0, 13));
    setErrors((prev) => ({ ...prev, telepon: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama: nama.trim(),
          kehadiran,
          telepon: `+62${telepon}`,
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Gagal mengirim RSVP. Coba lagi ya.");
      }
      setSubmitted({ nama: nama.trim(), kehadiran: kehadiran as Kehadiran });
      setStatus("success");
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Terjadi kesalahan. Coba lagi.",
      );
      setStatus("error");
    }
  }

  function reset() {
    setNama("");
    setKehadiran("");
    setTelepon("");
    setErrors({});
    setServerError("");
    setSubmitted(null);
    setStatus("idle");
  }

  if (status === "success" && submitted) {
    return (
      <div className="py-4 text-center" role="status" aria-live="polite">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lilac-soft">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-plum"
            aria-hidden="true"
          >
            <path d="M4.5 12.5 10 18 19.5 7" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold uppercase tracking-[0.15em] text-plum">
          Terima kasih, {submitted.nama}!
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {submitted.kehadiran === "Hadir"
            ? "RSVP kamu sudah tercatat. Sampai jumpa di Sweet Seventeen Mutiara! 💜"
            : "Konfirmasimu sudah tercatat. Terima kasih sudah mengabari, sampai jumpa lain waktu! 💌"}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 text-sm font-medium text-plum underline-offset-4 hover:underline"
        >
          Isi RSVP lainnya
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Nama lengkap */}
      <div>
        <label htmlFor="nama" className="text-sm font-medium text-ink">
          Nama Lengkap <span className="text-blossom">*</span>
        </label>
        <input
          id="nama"
          name="nama"
          type="text"
          autoComplete="name"
          placeholder="Tulis nama lengkapmu"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
            setErrors((prev) => ({ ...prev, nama: undefined }));
          }}
          aria-invalid={Boolean(errors.nama)}
          aria-describedby={errors.nama ? "nama-error" : undefined}
          className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-soft/50 focus:ring-2 focus:ring-plum/40 ${
            errors.nama ? "border-rose-400" : "border-lilac"
          }`}
        />
        {errors.nama && (
          <p id="nama-error" role="alert" className="mt-1.5 text-xs text-rose-500">
            {errors.nama}
          </p>
        )}
      </div>

      {/* Kehadiran */}
      <fieldset>
        <legend className="text-sm font-medium text-ink">
          Kehadiran <span className="text-blossom">*</span>
        </legend>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {(["Hadir", "Tidak Hadir"] as const).map((opt) => (
            <label key={opt} className="cursor-pointer">
              <input
                type="radio"
                name="kehadiran"
                value={opt}
                checked={kehadiran === opt}
                onChange={() => {
                  setKehadiran(opt);
                  setErrors((prev) => ({ ...prev, kehadiran: undefined }));
                }}
                className="peer sr-only"
              />
              <span className="flex items-center justify-center gap-2 rounded-xl border border-lilac bg-white px-4 py-3 text-sm font-medium text-ink-soft transition peer-checked:border-plum peer-checked:bg-lilac-soft peer-checked:text-plum peer-focus-visible:ring-2 peer-focus-visible:ring-plum/40">
                {kehadiran === opt && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path d="M4.5 12.5 10 18 19.5 7" />
                  </svg>
                )}
                {opt}
              </span>
            </label>
          ))}
        </div>
        {errors.kehadiran && (
          <p role="alert" className="mt-1.5 text-xs text-rose-500">
            {errors.kehadiran}
          </p>
        )}
      </fieldset>

      {/* Nomor telepon dengan prefix +62 */}
      <div>
        <label htmlFor="telepon" className="text-sm font-medium text-ink">
          Nomor Telepon <span className="text-blossom">*</span>
        </label>
        <div
          className={`mt-2 flex overflow-hidden rounded-xl border bg-white transition focus-within:ring-2 focus-within:ring-plum/40 ${
            errors.telepon ? "border-rose-400" : "border-lilac"
          }`}
        >
          <span
            aria-hidden="true"
            className="flex select-none items-center border-r border-lilac/70 bg-lilac-soft px-4 text-sm font-semibold text-plum"
          >
            +62
          </span>
          <input
            id="telepon"
            name="telepon"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            placeholder="81234567890"
            value={telepon}
            onChange={(e) => handlePhoneChange(e.target.value)}
            aria-invalid={Boolean(errors.telepon)}
            aria-describedby={errors.telepon ? "telepon-error" : "telepon-hint"}
            className="w-full border-0 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50"
          />
        </div>
        {errors.telepon ? (
          <p id="telepon-error" role="alert" className="mt-1.5 text-xs text-rose-500">
            {errors.telepon}
          </p>
        ) : (
          <p id="telepon-hint" className="mt-1.5 text-xs text-ink-soft/80">
            Tanpa angka 0 di depan — contoh: 81234567890
          </p>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-600"
        >
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-plum px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-plum/30 transition hover:bg-plum-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 animate-spin"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="3"
                opacity=".3"
              />
              <path
                d="M21 12a9 9 0 0 0-9-9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Mengirim…
          </>
        ) : (
          <>
            Kirim RSVP
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M3 11.5 21 3l-8.5 18-2.4-7.1L3 11.5Z" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
