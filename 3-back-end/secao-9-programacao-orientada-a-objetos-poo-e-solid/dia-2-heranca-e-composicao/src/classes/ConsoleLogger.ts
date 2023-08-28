import { Logger } from "../interfaces/Logger";

export class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(1, param);
  }
}