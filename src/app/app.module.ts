import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';

import { MaterialModule } from './material.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { LeadComponent } from './views/lead/lead.component';
import { ListLeadComponent } from './views/list-lead/list-lead.component';
import { ResumoComponent } from './views/resumo/resumo.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { SimuladorComponent } from './views/simulador/simulador.component'
import { LeadFormComponent } from './views/leadForm/leadForm.component'
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import localePt from '@angular/common/locales/pt';

import { registerLocaleData } from '@angular/common';
import { LeadListComponent } from './views/Lead-list/lead-list.component';
import { LeadUpdateComponent } from './views/lead-update/lead-update.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    LeadComponent,
    LeadFormComponent,
    LeadUpdateComponent,
    LeadListComponent,
    ResumoComponent,
    ConsultaComponent,
    SimuladorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule ,
    MaterialModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxCurrencyModule
   
  
 
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
      
      
    }
  ],
  bootstrap: [AppComponent]

  
})




export class AppModule { }
