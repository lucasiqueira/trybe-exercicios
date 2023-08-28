import { MyInterface } from "../interfaces/MyInterface";

export class MyClass implements MyInterface {
  constructor(
    public myNumber: number
  ) {}

  myFunc(myParam: number): string {
    return `A soma resulta em ${myParam + this.myNumber}.`;
  }
}