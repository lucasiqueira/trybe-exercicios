import { useState } from 'react';
import './App.css';

/* 
O formulário deve conter:

Input do tipo text contendo o nome completo;
Input do tipo number contendo a idade;
Input do tipo text contendo a cidade;
Quatro inputs do tipo radio button contendo o módulo que está estudando (Fundamentos, Front-end, Back-end ou Ciência da Computação);
Um botão para submeter as informações. Nesse exercício você não precisa implementar o click, o botão deve apenas existir na aplicação.
Dica: Utilize o hook useState para gerenciar o estado do seu componente!
 */

function App() {
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState(0);
  const [ city, setCity ] = useState('');
  const [ stack, setStack ] = useState('');

  return (
    <main>
      <h1>Formulário</h1>
      <form>
        <label>
          <input
            type="text"
            placeholder="Nome completo"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label>
          <input
            type="number"
            name=""
            id=""
            placeholder="Idade"
            value={ age }
            onChange={ ({ target }) => setAge(target.value) }
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Cidade"
            value={ city }
            onChange={ ({ target }) => setCity(target.value) }
          />
        </label>
        <fieldset>
          <legend>Módulos</legend>
          <label htmlFor="fundamentos">
            <input
              type="radio"
              name="stacks"
              id="fundamentos"
              value="Fundamentos"
              checked={stack === "Fundamentos"}
              onChange={ ({ target }) => setStack(target.value) }
            />
            <span>Fundamentos</span>
          </label>
          <label htmlFor="front-end">
            <input
              type="radio"
              name="stacks"
              id="front-end"
              value="Front-End"
              checked={stack === "Front-End"}
              onChange={ ({ target }) => setStack(target.value) }
            />
            <span>Front-End</span>
          </label>
          <label htmlFor="back-end">
            <input
              type="radio"
              name="stacks"
              id="back-end"
              value="Back-End"
              checked={stack === "Back-End"}
              onChange={ ({ target }) => setStack(target.value) }
            />
            <span>Back-End</span>
          </label>
          <label htmlFor="ciencia-da-computacao">
            <input
              type="radio"
              name="stacks"
              id="ciencia-da-computacao"
              value="ciencia-da-computacao"
              checked={stack === "ciencia-da-computacao"}
              onChange={ ({ target }) => setStack(target.value) }
            />
            <span>Ciência da Computação</span>
          </label>
        </fieldset>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log("Clicou");
          }}
        >
          Submeter Informações
        </button>
      </form>
    </main>
  );
}

export default App;
