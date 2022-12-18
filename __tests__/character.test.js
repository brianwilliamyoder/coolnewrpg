import { Character } from './../src/character.js';

describe('Character', () => {
  test('should create a character object with properties', () => {
    const character = new Character();
    expect(character.position).toEqual(undefined);
    expect(character.stamina).toEqual(undefined);
    expect(character.temperament).toEqual(undefined);
  })
});