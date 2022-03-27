import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyMaskConfig, CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpInterceptorProviders } from './core/http-interceptors';

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    ModalModule.forRoot()
  ],
  providers: [
    HttpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
