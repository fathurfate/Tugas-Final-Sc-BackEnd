import {
  ambilSemuaTugas,
  ambilTugasById,
  tambahTugas,
  updateTugas,
  hapusTugas
} from '../services/tugasService.js';

// GET semua tugas
async function getTugas(req, res) {
  try {
    const data = ambilSemuaTugas();
    return res.status(200).json({
      message: 'Berhasil mengambil semua tugas dari LiTULAS',
      data
    });
  } catch (err) {
    console.error('getTugas error:', err);
    return res.status(500).json({ message: 'Gagal mengambil data tugas', error: err.message });
  }
}

// GET by ID
async function getTugasById(req, res) {
  try {
    const item = ambilTugasById(req.params.id);
    return res.status(200).json({
      message: `Berhasil mengambil tugas dengan ID ${req.params.id}`,
      data: item
    });
  } catch (err) {
    console.error('getTugasById error:', err);
    if (err.message.toLowerCase().includes('tidak ditemukan')) {
      return res.status(404).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Gagal mengambil tugas', error: err.message });
  }
}

// POST tambah tugas
async function tambahTugasHandler(req, res) {
  try {
    const { nama } = req.body;
    if (!nama || String(nama).trim() === '') {
      return res.status(400).json({ message: 'Nama tugas wajib diisi!' });
    }

    const tugasBaru = tambahTugas(nama.trim());
    return res.status(201).json({
      message: `Tugas baru "${tugasBaru.nama}" berhasil ditambahkan ke LiTULAS`,
      tugas: tugasBaru
    });
  } catch (err) {
    console.error('tambahTugasHandler error:', err);
    return res.status(500).json({ message: 'Gagal menambah tugas', error: err.message });
  }
}

// PATCH update tugas (partial update)
async function updateTugasHandler(req, res) {
  try {
    const payload = req.body;
    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ message: 'Tidak ada data untuk diperbarui' });
    }

    const updated = updateTugas(req.params.id, payload);
    return res.status(200).json({
      message: `Tugas dengan ID ${req.params.id} berhasil diperbarui`,
      data: updated
    });
  } catch (err) {
    console.error('updateTugasHandler error:', err);
    if (err.message.toLowerCase().includes('tidak ditemukan')) {
      return res.status(404).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Gagal memperbarui tugas', error: err.message });
  }
}

// DELETE hapus tugas
async function deleteTugasHandler(req, res) {
  try {
    const deleted = hapusTugas(req.params.id);
    return res.status(200).json({
      message: `Tugas dengan ID ${req.params.id} berhasil dihapus dari LiTULAS`,
      deleted
    });
  } catch (err) {
    console.error('deleteTugasHandler error:', err);
    if (err.message.toLowerCase().includes('tidak ditemukan')) {
      return res.status(404).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Gagal menghapus tugas', error: err.message });
  }
}

export {
  getTugas,
  getTugasById,
  tambahTugasHandler,
  updateTugasHandler,
  deleteTugasHandler
};
