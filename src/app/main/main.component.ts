import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/tm/login')
      .pipe(
        catchError(this.handleError)
      )
      .subscribe();
  }

  // tslint:disable-next-line:typedef
  private handleError(error: HttpErrorResponse) {
    return throwError(
      '(LoginComponent) Проблемы на стороне сервера. Проверьте Интернет или запустили ли вы серверную часть приложения.');
  }


}
