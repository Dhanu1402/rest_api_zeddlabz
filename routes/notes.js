import express from 'express';

const router = express.Router();

// all routes are starting with /notes
router.get('/', (req, res) => {
  res.send('Hello from Notes');
});

export default router;
