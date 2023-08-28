export class Superclass {
  public isSuper: boolean = true;

  public sayHello(): void {
    console.log('Olá mundo!');
  };
};

export class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
};

