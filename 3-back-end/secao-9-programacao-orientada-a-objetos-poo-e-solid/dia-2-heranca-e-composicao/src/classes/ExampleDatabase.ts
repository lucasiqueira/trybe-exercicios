import { Database } from "../interfaces/Database";
import { Logger } from "../interfaces/Logger";
import { ConsoleLogger } from "./ConsoleLogger";

export class ExampleDatabase implements Database {

  constructor(
    public logger: Logger = new ConsoleLogger()
  ) {}

  save(key: string, value: string): void {
    this.logger.log(`${key} ---------> ${value}`)
  }
}