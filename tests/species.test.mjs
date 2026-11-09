import test from 'node:test';
import assert from 'node:assert/strict';
import { findSpecies, species } from '../lib/species.ts';

test('demo records have unique slugs and traceable sources', () => {
  assert.equal(new Set(species.map(item => item.slug)).size, species.length);
  for (const item of species) {
    assert.ok(item.scientificName && item.commonName && item.family);
    assert.match(item.source.url, /^https:\/\/animaldiversity\.org\/accounts\//);
    assert.match(item.source.accessed, /^\d{4}-\d{2}-\d{2}$/);
  }
});
test('search matches names, groups, and families without case sensitivity', () => {
  assert.equal(findSpecies('  PANTHERA ', '')[0]?.slug, 'tiger');
  assert.equal(findSpecies('cheloniidae', '')[0]?.slug, 'green-sea-turtle');
  assert.equal(findSpecies('butterfly', '')[0]?.slug, 'monarch-butterfly');
  assert.equal(findSpecies('', 'Mammals').length, 2);
  assert.equal(findSpecies('tiger', 'Reptiles').length, 0);
  assert.equal(findSpecies('nothing matches', '').length, 0);
  assert.equal(findSpecies('', '').length, species.length);
});
