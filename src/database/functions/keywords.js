import { getDb, close } from '../database.js';

/**
 * Returns all data from collection keywords in MongoDB.
 *
 * @returns {{_id:MongoId, keyword: string}|null} - keywords
 * null if not found
 * @memberof keywords
 */
async function getAll() {
  const db = await getDb();
  const rows = await db
    .collection('keywords')
    .find(
      {},
      {
        sort: {
          keyword: 1,
        },
      }
    )
    .toArray();
  await close();
  return rows;
}

/**
 * Returns inserted keyword or null.
 *
 * @param {string} keyword - keyword which will be saved in DB
 * @returns {{_id: MongoId, keyword: string}|null} inserted record;
 *    null if not found
 * @memberof keywords
 */
async function insertOne(keyword) {
  const db = await getDb();
  if (typeof keyword !== 'string' || keyword.trim() === '') {
    return null;
  }
  const newRecord = {
    keyword,
  };
  await db.collection('keywords').insertOne(newRecord);
  await close();
  return newRecord;
}

export { getAll, insertOne };
