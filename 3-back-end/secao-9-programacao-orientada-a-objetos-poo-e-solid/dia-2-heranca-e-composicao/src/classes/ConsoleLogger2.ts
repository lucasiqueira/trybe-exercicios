import { Logger } from "../interfaces/Logger";

export class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(2, param);
  }
}