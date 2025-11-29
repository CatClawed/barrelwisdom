import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
    private breadcrumbSubject: BehaviorSubject<any>;
    public breadcrumbObserve: Observable<any>
    private errorSubject: BehaviorSubject<any>;
    public errorObserve: Observable<any>

    breadcrumbs = signal<any>({});
    error = signal<any>({code:200})

    constructor() {
        this.breadcrumbSubject = new BehaviorSubject<any>({})
        this.breadcrumbObserve = this.breadcrumbSubject.asObservable()
        this.errorSubject = new BehaviorSubject<any>({code: 200})
        this.errorObserve = this.errorSubject.asObservable()
    }

    public get errorValue(): string {
        return this.error();
    }

    setStatus(code: number): boolean {
        if (code === 200) {
            this.error.set({code: code})
            return false;
        }
        else if (code === 404) {
            this.error.set({
                code:  code,
                title: "Oops! You're lost.",
                desc:  "Our puni told us that the page you're looking for doesn't exist."
            })
        }
        else {
            this.error.set({
                code:  code,
                title: "The server puni died.",
                desc:  "We'll replace that puni soon. The site is either broken or under maintenance."
            })
        }
        return true;
    }

    public get breadcrumbValue(): string {
        return this.breadcrumbs()
    }

    setBreadcrumbs(breadcrumbs, current: string) {
        this.breadcrumbs.set({breadcrumbs: breadcrumbs, current: current})
    }
}