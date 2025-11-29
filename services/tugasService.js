import tugasList from '../data.js';


// Ambil semua tugas
function ambilSemuaTugas() {
return [...tugasList];
}


// Ambil tugas berdasarkan ID
function ambilTugasById(id) {
const tugasId = parseInt(id);
const item = tugasList.find(t => t.id === tugasId);
if (!item) throw new Error('Tugas tidak ditemukan dalam sistem LiTULAS');
return item;
}


// Tambah tugas baru
function tambahTugas(nama) {
const tugasBaru = { id: tugasList.length + 1, nama, status: 'Belum' };
tugasList.push(tugasBaru);
return tugasBaru;
}


// Update tugas
function updateTugas(id, data) {
const tugasId = parseInt(id);
const index = tugasList.findIndex(t => t.id === tugasId);


if (index === -1) throw new Error('Tugas tidak ditemukan dalam sistem LiTULAS');


tugasList[index] = { ...tugasList[index], ...data };
return tugasList[index];
}


// Hapus tugas
function hapusTugas(id) {
const tugasId = parseInt(id);
const index = tugasList.findIndex(t => t.id === tugasId);


if (index === -1) throw new Error('Tugas tidak ditemukan dalam sistem LiTULAS');


const deleted = tugasList.splice(index, 1);
return deleted[0];
}


export {
ambilSemuaTugas,
ambilTugasById,
tambahTugas,
updateTugas,
hapusTugas
};