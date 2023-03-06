const handleValue = (name, value) => {
  if (name === 'name') return value.toUpperCase();
  if (name === 'address') return value.replace(/[^\w\s]/g, '');
  return value;
};

export default handleValue;
