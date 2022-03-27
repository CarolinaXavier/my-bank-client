import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable()
export class BamkAccountsService {

    private readonly baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = 'bankAccounts';
    }

    public search(queryes: JSON): Observable<any> {
        return this.httpService.post(this.baseUrl + '/search', queryes);
    }
}