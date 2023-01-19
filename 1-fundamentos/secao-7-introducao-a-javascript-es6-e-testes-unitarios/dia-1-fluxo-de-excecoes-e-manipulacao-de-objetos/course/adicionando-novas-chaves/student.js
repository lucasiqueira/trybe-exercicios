student = {};

const addProperty = (object, key, value) => {
  object[key] = value;
}

addProperty(student, 'firstName', 'Lucas');
addProperty(student, 'lastName', 'Siqueira');
addProperty(student, 'fullName', `${student.firstName} ${student.lastName}`);
addProperty(student, 'phoneNumber', '+55 (62) 98294-2320');
addProperty(student, 'github', 'lucasiqueira');
addProperty(student, 'linkedin', 'lucasvsiqueira');

console.log(student);