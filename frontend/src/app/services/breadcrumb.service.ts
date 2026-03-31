import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  breadcrumbs = signal<any>({});
  error = signal<any>({ code: 200 })

  public get errorValue(): string {
    return this.error();
  }

  setStatus(code: number): boolean {
    switch (code) {
      case 200:
        this.error.set({ code: code })
        return false;
      case 404:
        this.error.set({
          code: code,
          title: "Oops! You're lost.",
          desc: "Our puni told us that the page you're looking for doesn't exist."
        })
        break;
      default:
        this.error.set({
          code: code,
          title: "The server puni died.",
          desc: "We'll replace that puni soon. The site is either broken or under maintenance."
        })
    }
    return true;
  }

  public get breadcrumbValue(): string {
    return this.breadcrumbs()
  }

  setBreadcrumbs(breadcrumbs, current: string) {
    this.breadcrumbs.set({ breadcrumbs: breadcrumbs, current: current })
  }
}