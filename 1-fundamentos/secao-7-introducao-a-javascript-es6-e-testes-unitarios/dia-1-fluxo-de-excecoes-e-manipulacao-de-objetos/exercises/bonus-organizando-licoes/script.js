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

const allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});

const sumMathStudents = (object) => {
  const keys = Object.keys(object);
  let sum = 0;
  for (let index = 0; index < keys.length; index += 1) {
    if (object[keys[index]].materia === 'Matemática') {
      sum += object[keys[index]].numeroEstudantes;
    }
  }
  return sum;
};
// console.log(sumMathStudents(allLessons));

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const values = Object.values(obj);
  for (index in values) {
    if (values[index].professor === name) {
      allLessons.push(values[index].materia)
      allStudent += values[index].numeroEstudantes;
    }
  }
  return { aulas: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));