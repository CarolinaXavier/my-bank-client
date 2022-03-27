import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable()
export class TransactionsService {

    private readonly baseUrl: string;

    constructor(private httpService: HttpService) {
        this.baseUrl = 'transactions';
    }

    public search(queryes: JSON): Observable<any> {
        return this.httpService.post(this.baseUrl + '/search', queryes);
    }
}