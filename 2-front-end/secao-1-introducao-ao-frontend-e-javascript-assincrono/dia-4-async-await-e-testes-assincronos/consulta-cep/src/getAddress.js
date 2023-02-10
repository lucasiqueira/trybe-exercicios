export default async function getAddress (cep) {
  if (!cep) throw new Error('CEP não foi digitado');
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return data
}