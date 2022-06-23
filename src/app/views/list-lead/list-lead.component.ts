import { Component, OnInit } from '@angular/core';
import { LeadModel } from 'src/app/component/lead/lead.model';
import { LeadService  } from 'src/app/component/lead/lead.service'



export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ana Lúcia', weight: '(11)92006-2882'},
  {position: 2, name: 'Ana Júlia', weight: '(11)92006-2882'},
  {position: 3, name: 'Catarina ', weight: '(11)92006-2882'},
  {position: 4, name: 'Gabriel Sousa', weight: '(11)92006-2882'},
  {position: 5, name: 'Paulo José', weight: '(11)92006-2882'},
  {position: 6, name: 'Xiome Mi', weight: '(11)92006-2882'},

];


@Component({
  selector: 'app-list-lead',
  templateUrl: './list-lead.component.html',
  styleUrls: ['./list-lead.component.css']
})
export class ListLeadComponent implements OnInit {
  public leads: LeadModel[];


  displayedColumns: string[] = ['position', 'name', 'weight', 'action'];
 // dataSource = this.leads;

  
  constructor(private leadService: LeadService) { }

  ngOnInit(): void {
    this.leadService.all().subscribe(leads => {
      this.leads =  leads
      console.log(leads)
    })
  }
}
