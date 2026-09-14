import { Injectable } from '@angular/core';

@Injectable()
export abstract class LoggerService {
  abstract log(message: string): void;
}

@Injectable()
export class ConsoleLoggerService extends LoggerService {
  override log(message: string): void {
    console.log('[ConsoleLogger]', message);
  }
}