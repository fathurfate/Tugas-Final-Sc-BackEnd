import express from 'express';
import tugasRoutes from './routes/tugasRoutes.js';


const app = express();
const PORT = 3000;


// Middleware wajib biar bisa baca JSON
app.use(express.json());


// Cek koneksi server
app.get('/', (req, res) => {
res.send('🚀 SERVER LiTULAS BERHASIL TERHUBUNG!');
});


// Hubungkan endpoint /tugas
app.use("/tugas", tugasRoutes);



app.listen(PORT, () => {
console.log(`🔥 Server LiTULAS ON di http://localhost:${PORT}`);
});