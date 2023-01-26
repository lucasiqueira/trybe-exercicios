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

const dragonAttack = (dragon) => {
  const minDamage = 15
  const maxDamage = Math.floor(Math.random() * dragon.strength);
  const dragonDamage = (maxDamage > minDamage) ? maxDamage : minDamage;

  return dragonDamage
}

const warriorAttack = (warrior) => {
  const minDamage = warrior.strength
  const maxDamage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg));
  const warriorDamage = (maxDamage > minDamage) ? maxDamage : minDamage;
  
  return warriorDamage;
}

const mageAttack = (mage) => {
  let mageDamage;
  let manaExpent = 15;
  if (mage.mana >= 15) {
    const minDamage = mage.intelligence
    const maxDamage = Math.floor(Math.random() * minDamage);
    mageDamage = (maxDamage > minDamage) ? maxDamage : minDamage;
  } else {
    manaExpent = 0;
    mageDamage = 'Não possui mana suficiente';
  }
  return {damage: mageDamage, manaExpent: manaExpent}
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    warrior.damage = warriorAttack(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageAttack) => {
    let mageStats = mageAttack(mage);
    mage.damage = mageStats.damage;
    mage.mana -= mageStats.manaExpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonAttack) => {
    dragon.damage = dragonAttack(dragon);
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  finalCennario: () => console.log(battleMembers),
};