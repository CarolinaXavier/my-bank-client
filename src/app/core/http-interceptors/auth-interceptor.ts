import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
import { LoginService } from "src/app/home/login/services/login.service";

@Injectable()
export class AuthIntercepto implements HttpInterceptor {
    constructor(private readonly loginService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = this.loginService.getAuthorizationToken();
        let request: HttpRequest<any> = req

        if (token) {
            request = req.clone({
                headers: req.headers.set(`Authorization`, `Bearer ${token}`)
            })
        }

        return next.handle(request)
            .pipe(
                catchError(this.handleError)
            )
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error(`An error has occurred`, error.error.message)
        } else {
            console.error(
                `Error code ${error.status}`,
                `Error: ${JSON.stringify(error.error)}`)
        }
        return throwError(`An error has occurred, please try again`)
    }
}