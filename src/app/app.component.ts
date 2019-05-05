import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from './app.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    cadastros: Array<any>;
    cadastro: any;

    constructor(private translate: TranslateService, private service: AppService) {
        translate.setDefaultLang('en');
    }

    ngOnInit() {
        // this.cadastro = {};

        // this.service.listar().subscribe(resposta => this.cadastros = resposta);
    }
    // criar(frm: FormGroup) {
    //     // this.service.criar(this.cadastro).subscribe(resposta => {
    //     //     this.cadastros.push(resposta);
    //     //     frm.reset();
    //     // });
    // }
}
