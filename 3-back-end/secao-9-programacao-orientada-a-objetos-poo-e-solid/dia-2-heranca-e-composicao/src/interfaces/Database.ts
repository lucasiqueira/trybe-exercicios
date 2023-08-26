import { Logger } from "./Logger";

export interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}