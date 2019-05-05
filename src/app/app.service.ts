import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AppService {
  
    constructor(private http: HttpClient) {}


    getUsers(){
       return this.http.get(`${environment.baseApi}/users`)
    }

    // listar() {
    //     return this.http.get<Array<any>>(this.cadastroUrl);
    // }
    // criar(cadastro: any) {
    //     return new Promise((resolve, reject) => {
    //         const url = this.cadastroUrl + 'users/';

    //         this.http.post(url, cadastro).subscribe((result: any) => {
    //             resolve(result.json());
    //         },
    //         (error) => {
    //             reject(error.json());
    //         });
    //     });
    // }
}
