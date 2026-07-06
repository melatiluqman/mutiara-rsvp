# Mutiara's Sweet Seventeen — Website RSVP 💜

Website RSVP single-page untuk pesta ulang tahun ke-17 Mutiara — Friday 24th, 6 PM at Swiss Bellin Cawang. Desain mengikuti GSM acara: palet pastel ungu–pink, tipografi serif + script, dan ornamen floral watercolor (hidrangea, lavender, daisy, pita, paper plane, sparkle).

## Fitur

- **Hero/landing** dengan judul acara dan tombol RSVP (smooth scroll ke formulir).
- **Detail acara**: hari, waktu, lokasi, dan dress code.
- **Form RSVP**: nama lengkap, kehadiran (Hadir/Tidak Hadir), nomor telepon dengan prefix **+62** yang terkunci (hanya angka, angka 0 di depan dibuang otomatis).
- **Validasi** di sisi client dan server, pesan kesalahan yang jelas, indikator loading, anti-double-submit, dan notifikasi sukses tanpa refresh.
- **Integrasi Google Spreadsheet** real-time via Google Apps Script (kolom: Timestamp, Nama, Kehadiran, Nomor Telepon).

## Teknologi

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript. Endpoint Apps Script dipanggil dari server route (`app/api/rsvp/route.ts`) sehingga URL-nya tidak terekspos ke browser dan bebas masalah CORS.

## Struktur Proyek

```
app/
  layout.tsx          # Font (Cormorant Garamond, Great Vibes, Poppins) + metadata
  page.tsx            # Susunan section single-page
  globals.css         # Tema warna GSM (Tailwind v4 @theme) + animasi
  api/rsvp/route.ts   # Proxy + validasi server → Google Apps Script
components/
  Hero.tsx            # Landing dengan judul acara & tombol RSVP
  EventDetails.tsx    # Tanggal, waktu, lokasi, dress code
  RsvpSection.tsx     # Pembungkus kartu formulir
  RsvpForm.tsx        # Form + validasi + status kirim (client component)
  decorations.tsx     # Ornamen SVG: pita, paper plane, sparkle, amplop, dll.
  garden.tsx          # Komposisi bunga watercolor sudut halaman
apps-script/
  Code.gs             # Kode Google Apps Script (ditempel di editor Apps Script)
```

## 1. Menjalankan Secara Lokal

```bash
npm install
cp .env.example .env.local   # lalu isi APPS_SCRIPT_URL (lihat langkah 2)
npm run dev
```

Buka http://localhost:3000. Tanpa `APPS_SCRIPT_URL`, halaman tetap tampil — hanya pengiriman form yang akan menampilkan pesan kesalahan konfigurasi.

## 2. Menghubungkan Google Spreadsheet (Apps Script)

1. Buat **Google Spreadsheet** baru di [sheets.new](https://sheets.new).
2. Buka menu **Extensions → Apps Script**.
3. Hapus isi editor, lalu tempel seluruh isi [`apps-script/Code.gs`](apps-script/Code.gs) dan simpan.
4. Klik **Deploy → New deployment**, pilih tipe **Web app**:
   - **Execute as**: *Me*
   - **Who has access**: *Anyone*
5. Klik **Deploy**, izinkan akses saat diminta, lalu **salin URL Web App** (berakhiran `/exec`).
6. Tempel URL tersebut ke `.env.local`:

   ```
   APPS_SCRIPT_URL=https://script.google.com/macros/s/....../exec
   ```

7. Restart `npm run dev`, kirim RSVP percobaan — baris baru akan muncul di sheet **RSVP** (header dibuat otomatis: Timestamp, Nama, Kehadiran, Nomor Telepon; nomor tersimpan lengkap, mis. `+6281234567890`).

> Catatan: setiap kali mengubah kode Apps Script, lakukan **Deploy → Manage deployments → ✏️ Edit → Version: New version** agar perubahan aktif di URL yang sama.

## 3. Deploy ke Vercel

1. Push proyek ini ke repositori GitHub/GitLab/Bitbucket.
2. Di [vercel.com](https://vercel.com), pilih **Add New → Project** dan import repositori tersebut (framework Next.js terdeteksi otomatis, tanpa konfigurasi tambahan).
3. Pada langkah konfigurasi, tambahkan **Environment Variable**:
   - Name: `APPS_SCRIPT_URL`
   - Value: URL Web App Apps Script kamu
4. Klik **Deploy**. Selesai — situs langsung online dan setiap RSVP tercatat real-time di spreadsheet.

## Kustomisasi

- **Warna**: ubah token di blok `@theme` pada [`app/globals.css`](app/globals.css).
- **Teks acara** (nama, tanggal, lokasi, dress code): [`components/Hero.tsx`](components/Hero.tsx) dan [`components/EventDetails.tsx`](components/EventDetails.tsx).
- **Aturan nomor telepon**: regex `PHONE_RE` di [`components/RsvpForm.tsx`](components/RsvpForm.tsx) dan [`app/api/rsvp/route.ts`](app/api/rsvp/route.ts).
