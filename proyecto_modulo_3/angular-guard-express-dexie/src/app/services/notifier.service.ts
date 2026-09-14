import { Injectable } from '@angular/core';

@Injectable()
export class BaseNotifier {
  notify(message: string): void {
    console.log('[Notifier]', message);
  }
}

@Injectable()
export class EmailNotifier extends BaseNotifier {
  override notify(message: string): void {
    console.log('[EmailNotifier]', message);
  }
}