import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as keywordsRouter } from './keywords.js';
import { router as selectedValueRouter } from './selectedValue.js';

const PORT = 8080;
const WEB = 'web';
const app = express();

app.use(cors());
app.use(express.static(WEB));
app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use('/keywords', keywordsRouter);
app.use('/selectedValue', selectedValueRouter);
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
