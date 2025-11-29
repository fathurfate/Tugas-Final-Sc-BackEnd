import express from 'express';
import {
  getTugas,
  getTugasById,
  tambahTugasHandler,
  updateTugasHandler,
  deleteTugasHandler
} from '../controllers/tugasController.js';

const router = express.Router();

router.get('/', getTugas);
router.get('/:id', getTugasById);
router.post('/', tambahTugasHandler);
router.patch('/:id', updateTugasHandler);
router.delete('/:id', deleteTugasHandler);

export default router;
