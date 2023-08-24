export default class Aluno {
  private _matricula: number;
  private _nome: string;
  private _notaProva: number[];
  private _notaTrabalho: number[];

  constructor(m: number, n: string, p: number[], t: number[]) {
    this._matricula = m;
    this._nome = n;
    this._notaProva = p;
    this._notaTrabalho = t;
  };

  somaNotas () {
    const notas = [...this._notaProva, ...this._notaTrabalho];
    return notas.reduce((acc, curr) => acc + curr, 0);
  }

  mediaNotas () {
    return (this.somaNotas() / 6).toFixed(2);
  }
};
