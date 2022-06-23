
import { Component, OnInit} from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';
import { LeadService  } from 'src/app/component/lead/lead.service'


@Component({
  selector: 'app-lead',
  templateUrl: './leadForm.component.html',
  styleUrls: ['./leadForm.component.css']
})

export class LeadFormComponent implements OnInit {
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

  LeadService: any;
   
  constructor (private formBuilder: FormBuilder,
              private service: LeadService){}


  ngOnInit() {
 
    const fb = this.formBuilder;
    this.frm = this.formBuilder.group({
 
          nmComp: [null, [Validators.required, Validators.minLength(3)]], 
          celComp:  [null, [Validators.required, 	 Validators.minLength(11), Validators.maxLength(11)]],
          dtNscComp:  [],
          indComp:  [false],
          nmIndic: [null, [Validators.minLength(3)]],
          contatoInd: [null, [ Validators.minLength(11), Validators.maxLength(11)]],
          escrituraCPF: [],
          origRenda:  [],
          rendaBruta: [],
          saldoFGTS:  [],
          vrSinal:  [],
          fincAtivo:  [false],
          qtdParcelas:  [],
          vlrParcela: [],
          irAtualizado:  [],
          tpImovel:  [],
          sitImovel:  [],
          regImovel:  [],
    
   })

  }
 

  public  total = 0
 
  calcularSoma(){
    this.total=  Number(this.frm.value.qtdParcelas) * Number(this.frm.value.vlrParcela);
    return this.total
 }

  public createrLead() {
//    alert('this.frm.valid  ' + this.frm.valid)
    if(this.frm.valid){
 //     alert('Entrei  !  ' + " " + this.frm.value.indComp + " "  + this.frm.value.nmIndic )
      if(this.frm.value.indComp == true){
        if(this.frm.value.nmIndic == null ||this.frm.value.contatoInd == null) {
          alert('Preecha os campos *obrigatórios!')
          this.frm.valid = false
        }
      } 
        
       
      }
      
      if(this.frm.valid){
        alert('sucesso !!!!  ' + this.frm.valid)
        this.service.createrLead(this.frm.value).subscribe( response => {
          alert('Informações gravadas com sucesso!!!')
        })
        this.frm.reset(); 
      

    }
//    }else{
//      if (this.frm.invalid) {
//        alert('Preecha os campos *obrigatórios!!!' )
//        return;
//      }
//    }
  }

 
 
}
