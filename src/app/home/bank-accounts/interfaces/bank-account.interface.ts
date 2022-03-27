import { FormGroup, Validators } from "@angular/forms"

export class BankAccount {

    accountNumber: number | null = null
    agency: number | null = null
    balance: number | null = null
    active: boolean | null = null


    public createFormBankAccount() {
        return {

        }
    }

    public getFormValuesBankAccount(form: FormGroup) {

    }

}