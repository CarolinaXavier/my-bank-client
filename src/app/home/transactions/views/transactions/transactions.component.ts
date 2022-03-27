import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QueryPageService } from 'src/app/core/services/query-page.service';
import { Transaction } from '../../interfaces/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: Transaction[]
  public filters = {

  }

  constructor(private readonly transactionsService: TransactionsService,
    private readonly router: Router,
    private readonly queryPageService: QueryPageService) {

    this.transactions = []
  }

  ngOnInit(): void {
    this.goToSearch()
  }

  public goToSearch() {
    this.search(this.queryPageService.createQueryPage(this.filters));
  }

  public search(queryes?: any) {
    this.transactionsService.search(queryes).subscribe(response => {
      this.transactions = response;
      console.log('#transactions: ', this.transactions);
    });
  }

  goToBankAccounts() {
    this.router.navigate(['/home'])
  }

}
