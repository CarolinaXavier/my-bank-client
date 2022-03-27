import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { FormValidatorsAplyCSS } from 'src/app/core/services/form-validators-aply-css.service';
import { FormValidatorsCustom } from 'src/app/core/services/form-validators-custom.service';
import { User } from '../../interfaces/user.interface';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public user: User = new User();
  public formPersonalData: FormGroup;
  public formAddress: FormGroup;
  public formPassword: FormGroup;

  constructor(private readonly fb: FormBuilder,
    public readonly formValidatorsAplyCSS: FormValidatorsAplyCSS,
    public readonly alertService: AlertService,
    private readonly signUpService: SignUpService,
    private readonly router: Router) {

    this.formPersonalData = this.fb.group(this.user.createFormPersonalData());
    this.formAddress = this.fb.group(this.user.createFormAddress());
    this.formPassword = this.fb.group(this.user.createFormPassword())

  }

  ngOnInit(): void {
  }

  send() {
    if (FormValidatorsCustom.isValidForms(this.formPersonalData, this.formAddress, this.formPassword)) {

      this.user.getFormValuesPersonalData(this.formPersonalData)
      this.user.getFormValuesAddress(this.formAddress)
      this.user.getFormValuesPassword(this.formPassword)

      this.signUpService.insert(this.user).subscribe(response => {
        if (response) {
          this.alertService.success('Success', 'Sent with success', true)
          this.goToLogin()
        } else {
          this.alertService.error('Failure', 'Failed to send', true)
        }
      });
    } else {
      this.alertService.error('Error', 'Form error', true)
    }
  }

  goToLogin() {
    this.router.navigate(['/home/login']);
  }

}
