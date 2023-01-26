const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  return Math.floor(Math.random() * (dragon.strength - 15)) + 15;
}

const warriorAttack = () => {
  return Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)) + warrior.strength;
}

const mageAttack = () => {
  let damage;
  let manaExpent = 15;
  if (mage.mana >= 15) {
    damage = Math.floor(Math.random() * mage.intelligence) + mage.intelligence;
  } else {
    manaExpent = 0;
    damage = 'Não possui mana suficiente';
  }
  return {damage: damage, manaExpent: manaExpent}
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    warrior.damage = warriorAttack();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageAttack) => {
    let obj = mageAttack();
    mage.damage = obj.damage;
    mage.mana = obj.manaExpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonAttack) => {
    dragon.damage = dragonAttack();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  finalCennario: () => console.log(battleMembers),
};