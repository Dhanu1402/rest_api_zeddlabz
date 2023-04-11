import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let notes = [];

// all routes are starting with /notes
router.get('/', (req, res) => {
  res.send(notes);
});

// adding data to the database
router.post('/', (req, res) => {
  const note = req.body;

  notes.push({ ...note, id: uuidv4() });
  res.send(`Note of ${note.name} added to the database!`);
});

// getting a specific note
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundNote = notes.find((note) => note.id === id);
  res.send(foundNote);
});

// deleting a note
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter((note) => note.id !== id);
  res.send(`Note with id ${id} deleted from the database.`);
});

export default router;
