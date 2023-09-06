import assert from 'assert';
import { describe, it } from 'mocha';

import { insertOne as keywordsInsertOne } from '../src/database/functions/keywords.js';
import { insertOne as selectedCryptoCurrencyInsertOne } from '../src/database/functions/selectedValue.js';

describe('Testing keywordsInsertOne', () => {
  it('keywordsInsertOne is function', () => {
    assert(
      typeof keywordsInsertOne === 'function',
      'keywordsInsertOne is not a function'
    );
  });
  it('keywordsInsertOne returns type object result', async () => {
    let res = keywordsInsertOne('1');
    assert(
      typeof (await res) === 'object',
      `keywordsInsertOne returned wrong result: ${res} (it should be { keyword})`
    );
  });
  it('keywordsInsertOne works with numbers', async () => {
    let res = keywordsInsertOne(1);
    assert(
      (await res) === null,
      `keywordsInsertOne returned wrong result: ${res} (it should be null)`
    );
  });
  it('keywordsInsertOne without parameters', async () => {
    let res = keywordsInsertOne();
    assert(
      (await res) === null,
      `keywordsInsertOne return wrong result: ${res}`
    );
  });
});

describe('Testing selectedCryptoCurrencyInsertOne', () => {
  it('selectedCryptoCurrencyInsertOne is function', () => {
    assert(
      typeof selectedCryptoCurrencyInsertOne === 'function',
      'selectedCryptoCurrencyInsertOne is not a function'
    );
  });
  it('selectedCryptoCurrencyInsertOne returns type object result', async () => {
    let res = selectedCryptoCurrencyInsertOne('1', '2');
    assert(
      typeof (await res) === 'object',
      `selectedCryptoCurrencyInsertOne returned wrong result: ${res} (it should be { keyword})`
    );
  });
  it('selectedCryptoCurrencyInsertOne works with numbers', async () => {
    let res = selectedCryptoCurrencyInsertOne(1, 2);
    assert(
      (await res) === null,
      `selectedCryptoCurrencyInsertOne returned wrong result: ${res} (it should be null)`
    );
  });
  it('selectedCryptoCurrencyInsertOne without parameters', async () => {
    let res = selectedCryptoCurrencyInsertOne();
    assert(
      (await res) === null,
      `selectedCryptoCurrencyInsertOne return wrong result: ${res}`
    );
  });
});
