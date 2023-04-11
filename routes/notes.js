import express from 'express';

const router = express.Router();

const notes = [
  {
    name: 'Dhanu',
    note: 'This is a note',
  },
  {
    name: 'kumar',
    note: 'This is a note',
  },
];

// all routes are starting with /notes
router.get('/', (req, res) => {
  res.send(notes);
});

// adding data to the database
router.post('/', (req, res) => {
  const note = req.body;
  notes.push(note);
  res.send(`Note of ${note.name} added to the database!`);
});

export default router;
