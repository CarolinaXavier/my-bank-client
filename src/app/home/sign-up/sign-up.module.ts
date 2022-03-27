import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { RegisterComponent } from './views/register/register.component';
import { SignUpService } from './services/sign-up.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [SignUpService]
})
export class SignUpModule { }