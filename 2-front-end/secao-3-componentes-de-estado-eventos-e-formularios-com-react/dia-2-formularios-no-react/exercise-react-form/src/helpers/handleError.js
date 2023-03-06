const handleError = (target) => {
  const { name, value } = target;
  const maxText = {
    name: 40,
    email: 50,
    cpf: 11,
    address: 200,
    city: 28,
    curriculum: 1000,
    position: 40,
    description: 500,
  };
  const errorCheck = [
    (name === 'name' && value.length > maxText.name),
    (name === 'email' && value.length > maxText.email),
    (name === 'cpf' && value.length > maxText.cpf),
    (name === 'address' && value.length > maxText.address),
    (name === 'city' && value.length > maxText.city),
    (name === 'curriculum' && value.length > maxText.curriculum),
    (name === 'position' && value.length > maxText.position),
    (name === 'description' && value.length > maxText.description),
  ];
  const errorFound = errorCheck.some((error) => error === true);
  if (errorFound) return true;
};

export default handleError;
