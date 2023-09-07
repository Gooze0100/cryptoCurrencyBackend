import { getDb } from '../database.js';

/**
 * Returns all data from collection cryptoCurrency in MongoDB.
 *
 * @returns {{_id:MongoId, cryptoCurrency: string}|null} - cryptoCurrency
 * null if not found
 * @memberof cryptoCurrency
 */
async function getAll() {
  const db = await getDb();
  const rows = await db.collection('cryptoCurrency').find().toArray();
  return rows;
}

/**
 * Returns inserted cryptoCurrency or null.
 *
 * @param {string} cryptoCurrency - cryptoCurrency which will be saved in DB
 * @returns {{_id: MongoId, cryptoCurrency: string}|null} inserted record;
 * null if not found
 * @memberof cryptoCurrency
 */
async function insertOne(cryptoCurrency) {
  const db = await getDb();
  if (typeof cryptoCurrency !== 'string' || cryptoCurrency.trim() === '') {
    return null;
  }
  const newRecord = {
    cryptoCurrency,
  };
  await db.collection('cryptoCurrency').insertOne(newRecord);
  return newRecord;
}

export { getAll, insertOne };
