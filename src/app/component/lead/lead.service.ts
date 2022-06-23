
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LeadModel } from './lead.model';


@Injectable({
  providedIn: 'root'
})
export class LeadService {

  baseUrl = "http://localhost:8081/lead"


  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"],

      });
  }

 // get(): Observable<LeadModel>{
 //     return this.http.get<LeadModel>(this.baseUrl)
 // }

//Criar um novo registro
  createrLead(lead: LeadModel): Observable<LeadModel>{
      return this.http.post<LeadModel>(this.baseUrl, lead)
  }

//Lista todos 
  all(): Observable<LeadModel[]> {
  return this.http.get<LeadModel[]>(this.baseUrl);
  }

//Solicita apenas com id informado
  leadById(nmComp: string | null): Observable<LeadModel> { 
    const url = '${this.baseUrl}/${nmComp}';
    return this.http.get<LeadModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)));
  }

//atualiza Lead por id  
  leadUpdate(lead: LeadModel): Observable<LeadModel>{
    const url = '${this.baseUrl}/${LeadModel.nmComp}'
    return this.http.put<LeadModel>(url, lead).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  errorHandler(_e: any): Observable<any> {
    this.showMessage("Ocorreu um erro! - LeadService" , true);
    return EMPTY;
  }
}

