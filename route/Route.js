import express from "express";
import {createNotes, deleteNotes, getNotes, updateNotes} from "../controller/NoteController.js";

const router = express.Router();

router.get('/notes', getNotes);
router.post('/create-notes', createNotes);
router.put('/update-notes/:id', updateNotes);
router.delete('/delete-notes/:id', deleteNotes);

export default router;