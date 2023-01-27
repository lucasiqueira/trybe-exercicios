const estudantes = require('./estudantes');

/* Agora vamos usar um map com um find.
Buscar um estudante pelo nome e retornar a situação dele em cada matéria: */

const findStudent = (name, students) => students.find((student) => student.nome === name);

const reportStatus = (name, students) => {
  const student = findStudent(name, students);
  return student.materias.map((subject) => `${subject.name}: ${(Number(subject.nota) < 60) ? 'Reprovado' : 'Aprovado'}`);
};

reportStatus('Mario', estudantes);
