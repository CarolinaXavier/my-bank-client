import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [LoginService]
})
export class LoginModule { }
