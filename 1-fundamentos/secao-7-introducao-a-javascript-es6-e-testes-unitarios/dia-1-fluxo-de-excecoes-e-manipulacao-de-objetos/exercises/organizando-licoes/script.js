const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addPropertyToLesson = (object, key, value) => {
  object[key] = value;
}

addPropertyToLesson(lesson2, 'turno', 'noite');

console.log(lesson2);

const showKeys = (object) => {
  return Object.keys(object);
}

console.log(showKeys(lesson1));

const showObjectSize = (object) => {
  const keys = showKeys(object);
  return keys.length;
}

console.log(showObjectSize(lesson1));

const showValues = (object) => {
  return Object.values(object);
}

console.log(showValues(lesson1));

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons);

const sumStudents = (object) => {
  const keys = Object.keys(object);
  let total = 0
  for (let index = 0; index < keys.length; index += 1) {
    total += object[keys[index]].numeroEstudantes;
  }
  return total;
}

console.log(sumStudents(allLessons));

const getValueByNumber = (object, number) => {
  const values = Object.values(object);
  return values[number];
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

const verifyPair = (object, key, value) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  if (keys.includes(key) && values.includes(value)) {
    if (object[key] == value) return true;
    return false;
  };
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false