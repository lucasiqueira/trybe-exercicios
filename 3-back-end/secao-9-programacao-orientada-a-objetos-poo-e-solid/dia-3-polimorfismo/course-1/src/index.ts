// Suponha que você está modelando os personagens do jogo de luta multijogadores Super Smash Bros. No jogo, há personagens de alcances variados e movimentos especiais variados. Vence a pessoa que acumulou mais pontos na partida.

// 1 - Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.

abstract class Character {
  talk(): void {};
  specialMove(): void {};
  static present (character: Character) {
    character.talk();
    character.specialMove();
  }
}

// 2 - Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe. A lógica da função em si pode ser simulada - retorne um console.log() dizendo o que ela faz!

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`${this._name} conversa!`);
  }
  specialMove(): void {
    console.log(`Passo secreto do ${this._name} é o ${this._specialMoveName}!`);
    
  }
}

// 3 - Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }

  
  talk(): void {
    console.log(`Personagem de alto alcance ${this._name} conversa.`);
  }

  specialMove(): void {
    console.log(`Passo secreto do personagem de longo alcance ${this._name} é o ${this._specialMoveName}.`);
  }
}

// 4 - Agora instancie as classes filhas com os personagens Yoshi e Samus, com seus respectivos specialMoveName e chame os métodos talk e specialMove para apresentar o personagem e seus respectivos ataques especiais.

const yoshi = new MeleeCharacter('Yoshi', 'Fighting Rim');
const samus = new LongRangeCharacter('Samus', 'Gentle kill');

Character.present(yoshi);
Character.present(samus);

// 1 - Continuando com o exercício anterior do jogo de luta Super Smash Bros, vamos aplicar uma refatoração com base no conteúdo acima. Crie um método estático que receba como parâmetro character: Character e, dentro dele, chame os métodos talk e specialMove para apresentar o personagem.



// 2 - Agora, ao invés de acionarmos os métodos talk e specialMove individualmente a partir das instâncias, acione-os por meio do método estático criado no exercício anterior.