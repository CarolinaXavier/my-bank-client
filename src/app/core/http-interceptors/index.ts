import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthIntercepto } from "./auth-interceptor";

export const HttpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercepto, multi: true }
]