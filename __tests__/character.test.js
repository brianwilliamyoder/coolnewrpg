import { Character } from './../src/character.js';

describe('Character', () => {
  test('should create a character object with properties', () => {
    const character = new Character();
    expect(character.position).toEqual(undefined);
    expect(character.stamina).toEqual(undefined);
    expect(character.temperament).toEqual(undefined);
    expect(character.inventory).toEqual(undefined);
  });

  test('should update stamina and temperament values', () => {
    const character = new Character("waiter", 0, 0, "notepad");
    character.gainExperience();
    expect(character.stamina).toEqual(1);
    expect(character.temperament).toEqual(1);
  });


});
