import express from 'express';
import { helloRouter } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', helloRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
