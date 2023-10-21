import {Injectable, OnDestroy} from '@angular/core';
import {AppComponent} from '@app/app.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

// The blank methods are intentional.
class LocalStorage implements Storage {
  [name: string]: any;
  readonly length: number;
  clear(): void {}
  getItem(key: string): string | null {return undefined;}
  key(index: number): string | null {return undefined;}
  removeItem(key: string): void {}
  setItem(key: string, value: string): void {}
}


@Injectable({
  providedIn: 'root',
})
export class LocalstorageService implements Storage, OnDestroy {

  private storage: Storage;
  private destroy$ = new Subject<void>();

  constructor() {
    this.storage = new LocalStorage();

    AppComponent.isBrowser
      .pipe(takeUntil(this.destroy$))
      .subscribe(isBrowser => {
      if (isBrowser) {
        this.storage = localStorage;
      }
    });
  }

  [name: string]: any;

  length: number;

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}