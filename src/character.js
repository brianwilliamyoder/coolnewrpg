export class Character {
  constructor (position, stamina, temperament, inventory) {
    this.position = position;
    this.stamina = stamina;
    this.temperament = temperament
    this.inventory = inventory;;
  }

  gainExperience() {
    this.stamina += 1;
    this.temperament += 1;
  }
 }