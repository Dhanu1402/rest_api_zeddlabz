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

export default router;
