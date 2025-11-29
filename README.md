# Tugas-Final-Sc-BackEnd

# Tugas-Final-Sc-BackEnd
# Tugas API – Simple CRUD dengan Express.js

Proyek ini adalah API sederhana untuk mengelola data tugas. Dibangun menggunakan **Node.js** dan **Express**, dengan arsitektur **Routes → Controller → Services** agar kode lebih terstruktur dan mudah dikembangkan.

---

## Fitur Utama

API ini menyediakan lima operasi dasar CRUD:

* **GET** – mengambil semua data tugas
* **GET by ID** – mengambil tugas berdasarkan ID
* **POST** – menambahkan tugas baru
* **PATCH** – memperbarui data tugas
* **DELETE** – menghapus tugas

API ini cocok untuk latihan backend dasar atau sebagai mini project.

##  Instalasi & Menjalankan Proyek

### 1. Clone atau Download Repository

```bash
git clone <repo-kamu>
cd nama-folder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan Server

```bash
node index.js
```

Server berjalan pada:

```
http://localhost:3000
```

---

## Endpoints

### 1. **GET /tugas**

Mengambil seluruh data tugas.

**Contoh:**

```
GET http://localhost:3000/tugas
```

---

### 2. **GET /tugas/:id**

Mengambil satu tugas menggunakan ID.

**Contoh:**

```
GET http://localhost:3000/tugas/1
```

---

### 3. **POST /tugas**

Menambahkan tugas baru.

**Body (JSON):**

```json
{
  "judul": "Belajar Express",
  "status": "belum",
  "deadline": "2025-12-01"
}
```

**Contoh:**

```
POST http://localhost:3000/tugas
```

---

### 4. **PATCH /tugas/:id**

Memperbarui sebagian data tugas.

**Body (JSON):**

```json
{
  "status": "selesai"
}
```

**Contoh:**

```
PATCH http://localhost:3000/tugas/1
```

---

### 5. **DELETE /tugas/:id**

Menghapus tugas berdasarkan ID.

**Contoh:**

```
DELETE http://localhost:3000/tugas/1
```

---

##  Struktur Proyek

```
project/
│ index.js
│
├─ routes/
│   └─ tugasRoutes.js
│
├─ controllers/
│   └─ tugasController.js
│
└─ services/
    └─ tugasService.js
```

* **Routes** – mendefinisikan endpoint
* **Controller** – menangani request & response
* **Services** – berisi logika CRUD utama

Struktur ini membantu proyek tetap rapi dan mudah dikembangkan di masa depan.

