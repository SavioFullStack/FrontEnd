import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { LeadModel } from 'src/app/component/lead/lead.model';
import { LeadService } from 'src/app/component/lead/lead.service';
import { LeadListDataSource } from './lead-list-datasource';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<LeadModel>;
  dataSource: LeadListDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  
  leads: LeadModel[];
  
  displayedColumns = ['name', 'contato', 'action'];

  constructor(private leadService: LeadService) {
    this.dataSource = new LeadListDataSource();
  }


  ngOnInit() {
 //   this.dataSource = new LeadListDataSource();
    this.leadService.all().subscribe(leads => {
      this.leads =  leads
      console.log(leads)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    
   
  }
}
