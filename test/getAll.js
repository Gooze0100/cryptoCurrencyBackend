import assert from 'assert';
import { describe, it } from 'mocha';

import { getAll as keywordsGetAll } from '../src/database/functions/keywords.js';
import { getAll as selectedCryptoCurrencyGetAll } from '../src/database/functions/selectedValue.js';

describe('Testing keywordsGetAll', () => {
  it('keywordsGetAll is function', () => {
    assert(
      typeof keywordsGetAll === 'function',
      'keywordsGetAll is not a function'
    );
  });
});

describe('Testing selectedCryptoCurrencyGetAll', () => {
  it('selectedCryptoCurrencyGetAll is function', () => {
    assert(
      typeof selectedCryptoCurrencyGetAll === 'function',
      'selectedCryptoCurrencyGetAll is not a function'
    );
  });
});
