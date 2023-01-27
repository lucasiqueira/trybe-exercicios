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

const dragonAttack = (dgn) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dgn.strength);
  const dragonDamage = (maxDamage > minDamage) ? maxDamage : minDamage;

  return dragonDamage;
};

const warriorAttack = (warr) => {
  const minDamage = warr.strength;
  const maxDamage = Math.floor(Math.random() * (minDamage * warr.weaponDmg));
  const warriorDamage = (maxDamage > minDamage) ? maxDamage : minDamage;

  return warriorDamage;
};

const mageAttack = (mag) => {
  let mageDamage;
  let manaExpent = 15;
  if (mag.mana >= 15) {
    const minDamage = mag.intelligence;
    const maxDamage = Math.floor(Math.random() * minDamage);
    mageDamage = (maxDamage > minDamage) ? maxDamage : minDamage;
  } else {
    manaExpent = 0;
    mageDamage = 'Não possui mana suficiente';
  }
  return { damage: mageDamage, manaExpent };
};

const gameActions = {
  warriorTurn: (warriorAtt) => {
    warrior.damage = warriorAtt(warrior);
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageAtt) => {
    const mageStats = mageAtt(mage);
    mage.damage = mageStats.damage;
    mage.mana -= mageStats.manaExpent;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonAtt) => {
    dragon.damage = dragonAtt(dragon);
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  finalCennario: () => battleMembers,
};

gameActions.dragonTurn(dragonAttack);
gameActions.mageTurn(mageAttack);
gameActions.warriorTurn(warriorAttack);
gameActions.finalCennario();
