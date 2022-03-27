import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { User } from '../interfaces/user.interface';

@Injectable()
export class SignUpService {

  private readonly baseUrl: string;

  constructor(private httpService: HttpService) {
    this.baseUrl = 'users';
  }

  public insert(model: User): Observable<any> {
    return this.httpService.post(this.baseUrl, model);
  }

}