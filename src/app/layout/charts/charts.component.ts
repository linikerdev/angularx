import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
    cadastros: Array<any>;
    cadastro: any;

    constructor(private service: AppService) {}

    ngOnInit() {
        this.cadastro = {};

        this.service.listar().subscribe(resposta => this.cadastros = resposta);
    }
    criar(frm: FormGroup) {
        this.cadastro()
        .then(() => {
          this.cadastro({ message: 'Usuário salvo com sucesso.', position: 'botton', duration: 3000 }).present();
        })
        .catch((error) => {
          this.cadastro({ message: 'Erro ao salvar o usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
        });
    }
}

