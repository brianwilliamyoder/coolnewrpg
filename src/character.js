export class Character {
  constructor (position, stamina, temperament) {
    this.position = position;
    this.stamina = stamina;
    this.temperament = temperament
    this.inventory = [];;
  }

  gainExperience() {
    this.stamina += 1;
    this.temperament += 1;
  }

  levelUp(position, inventory) {
    this.position = position;
    this.inventory.push(inventory);
  }
 }