fetch('https://api.goprogram.ai/inspiration')
  .then((response) => response.json())
  .then((data) => console.log(`"${data.quote}" ${data.author}`))
  .catch(() => console.log(new Error('O retorno foi um erro. Sinto muito!')))
  .finally(() => console.log('Acabou a requisição'));