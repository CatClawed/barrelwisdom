import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
    private breadcrumbSubject: BehaviorSubject<any>;
    public breadcrumbObserve: Observable<any>
    private errorSubject: BehaviorSubject<any>;
    public errorObserve: Observable<any>

    constructor() {
        this.breadcrumbSubject = new BehaviorSubject<any>({})
        this.breadcrumbObserve = this.breadcrumbSubject.asObservable()
        this.errorSubject = new BehaviorSubject<any>({code: 200})
        this.errorObserve = this.errorSubject.asObservable()
    }

    public get errorValue(): string {
        return this.errorSubject.value;
    }

    setStatus(code: number): boolean {
        if (code === 200) {
            this.errorSubject.next({ code: code });
            return false;
        }
        else if (code === 404) {
            this.errorSubject.next({
                code:  code,
                title: "Oops! You're lost.",
                desc:  "Our puni told us that the page you're looking for doesn't exist."
            });
        }
        else {
            this.errorSubject.next({
                code:  code,
                title: "The server puni died.",
                desc:  "We'll replace that puni soon. The site is either broken or under maintenance."
            });
        }
        return true;
    }

    public get breadcrumbValue(): string {
        return this.breadcrumbSubject.value;
    }

    setBreadcrumbs(breadcrumbs, current: string) {
        this.breadcrumbSubject.next({breadcrumbs: breadcrumbs, current: current});
    }
}