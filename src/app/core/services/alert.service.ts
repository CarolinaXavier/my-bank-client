import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private subject = new Subject<any>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    this.keepAfterRouteChange = false;
                } else {
                    this.clear();
                }
            }
        });
    }

    public getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    public success(title: string, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', title: title, message: message });
    }

    public error(title: string, message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', title: title, message: message });
    }

    public clear() {
        this.subject.next({});
    }

}