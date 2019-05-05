import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    cadastroUrl = 'https://reqres.in/api/';
    constructor(private http: HttpClient) {}

    listar() {
        return this.http.get<Array<any>>(this.cadastroUrl);
    }
    criar(cadastro: any) {
        return new Promise((resolve, reject) => {
            const url = this.cadastroUrl + 'users/';

            this.http.post(url, cadastro).subscribe((result: any) => {
                resolve(result.json());
            },
            (error) => {
                reject(error.json());
            });
        });
    }
}
