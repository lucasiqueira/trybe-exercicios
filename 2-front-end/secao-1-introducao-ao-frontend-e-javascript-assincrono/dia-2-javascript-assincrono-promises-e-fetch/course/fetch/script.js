fetch('https://dummyjson.com/quotes/random')
  .then(response => response.json())
  .then((data) => console.log(`"${data.quote}" ${data.author}`))
  .catch((error) => console.log(error));
