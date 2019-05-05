import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from 'src/app/app.service';
import { User } from 'src/app/interfaces/User';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
    displayedColumns = ['id', 'first_name', 'last_name'];
    dataSource: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    users: User[] = [];

    constructor(private serviceApi: AppService) {}

    async ngOnInit() {

        const users = await this.serviceApi.getUsers().toPromise()
        this.users = users.data
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;


    }

    getUsers() {
        return this.serviceApi.getUsers()
        // .then(res => this.users = res.data)
        // .catch(err => {
        //     throw new Error('ocorreu um erro ao processar request')
        // })
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}

/** Constants used to fill up our data base. */

// export interface UserData {
//     id: string;
//     name: string;
//     progress: string;
//     color: string;
// }

// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//     const name =
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//         ' ' +
//         NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//         '.';

//     return {
//         id: id.toString(),
//         name: name,
//         progress: Math.round(Math.random() * 100).toString(),
//         color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
//     };
// }
