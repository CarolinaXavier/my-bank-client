import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { LoginInterface } from '../interfaces/login.interface';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private readonly baseUrl: string

    constructor(private httpService: HttpService) {
        this.baseUrl = 'auth/login'
    }

    public login(user: LoginInterface): Observable<any> {
        return this.httpService.post(this.baseUrl, user)
    }

    public getAuthorizationToken() {
        const token = window.localStorage.getItem('token')
        return token;
    }

    public setToken(token: string) {
        window.localStorage.setItem('token', token)
    }

    public setUser(token: string) {
        window.localStorage.setItem('user', token)
    }

    public getUser() {
        const user =  window.localStorage.getItem('user')
        return user;
    }


}