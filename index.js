import express from 'express';

// allows us to take in incoming post request
import bodyParser from 'body-parser';

const app = express();

const PORT = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from Homepage');
});

app.listen(PORT, () =>
  console.log(`Server is running on port: http://localhost:${PORT}`)
);
