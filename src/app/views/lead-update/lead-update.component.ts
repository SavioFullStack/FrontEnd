import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadModel } from 'src/app/component/lead/lead.model';
import { LeadService } from 'src/app/component/lead/lead.service';

@Component({
  selector: 'app-lead-update',
  templateUrl: './lead-update.component.html',
  styleUrls: ['./lead-update.component.css']
})

export class LeadUpdateComponent implements OnInit {
  public errCel: String = 'É necessário informar 11 números!'
  public errNom: String = 'Nome deverá ter no mínimo 3 digitos'
  public errDtn: String  = 'Data invalida'
  public errIndNm: String  = 'Informe Nome'
  public errIndCel: String  = 'Informe nº contato'
  public campoSomaFin: String = 'Saldo'
  public frm: any;
   
  public origens  = [
    'Autonomo',
    'Carteira Assinada',
    'Funcionário Público',
    'Pro-Labore Empesário',
    'Profissional Liberal'
  ];

  public tpImoveis  = [
    'Apartamento',
    'Chacará',
    'Casa',
    'Galpão',
    'Loja',
    'Terreno',
  ];
  
  public stImoveis = [
    'Na Planta',
    'Em construção',
    'Pronta Morar'
  ];

  public loc = [
    'Barueri SP',
    'Carapicuiba SP',
    'Cotia SP',
    'Jandira SP',
    'Osasco SP',
    'Taboão da Serra SP'
  ];
  isDisabled = true;

  lead: LeadModel;
  constructor(private leadService: LeadService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
     const name = this.route.snapshot.paramMap.get('nmComp') ;
     this.leadService.leadById(name).subscribe((lead) =>{
      this.lead = lead;
      });
  }


  public  total = 0
 
  calcularSoma(){
    this.total=  Number(this.frm.value.qtdParcelas) * Number(this.frm.value.vlrParcela);
    return this.total
 }

  updateLead(): void{
  
  }

  cancel(): void{

  }
}
