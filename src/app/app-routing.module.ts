import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { LeadComponent } from './views/lead/lead.component';
import { SimuladorComponent } from './views/simulador/simulador.component'
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ResumoComponent } from './views/resumo/resumo.component';

import { LeadFormComponent } from './views/leadForm/leadForm.component';
import { LeadListComponent } from './views/Lead-list/lead-list.component';
import { LeadUpdateComponent } from './views/lead-update/lead-update.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "lead", component: LeadComponent},
 
  {path: "leadlist", component: LeadListComponent},
  {path: "novolead", component: LeadFormComponent},
  {path: "simulador", component: SimuladorComponent},
  {path: "consultar", component: ConsultaComponent},
  {path: "resumo", component: ResumoComponent},
  {path: "leadById/:nmComp", component: LeadUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
