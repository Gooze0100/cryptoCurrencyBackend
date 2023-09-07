import express from 'express';
import { getAll, insertOne } from './database/functions/selectedValue.js';

export const router = express.Router();

/**
 * GET router
 * Gets all record from MongoDB or returns 500 error
 */
router.get('/', async (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf8');
  try {
    const records = await getAll();
    res.send(records);
  } catch (err) {
    res.status(500).end(`Error occurred: ${err.message}`);
  }
});

/**
 * GET router
 * Insert one record to MongoDB or return 500 error
 * @param {string} condition - condition which will be saved in DB
 */
router.get('/save/:cryptoCurrency/:secondCryptoCurr', async (req, res) => {
  res.set('Content-Type', 'application/json; charset=utf8');
  if (
    req.params['cryptoCurrency'] &&
    req.params['cryptoCurrency'].trim() !== '' &&
    req.params['secondCryptoCurr'] &&
    req.params['secondCryptoCurr'].trim() !== ''
  ) {
    try {
      if (
        typeof req.params['cryptoCurrency'] === 'string' &&
        typeof req.params['secondCryptoCurr'] === 'string'
      ) {
        const record = await insertOne(
          `${req.params['cryptoCurrency']}/${req.params['secondCryptoCurr']}`
        );
        res.send(record);
      }
    } catch (err) {
      res.status(500).end(`Error occurred: ${err.message}`);
    }
  } else {
    res.redirect('/');
  }
});
