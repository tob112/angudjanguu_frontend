import { Component } from '@angular/core';
import { SmartTablesService } from './admin.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Restangular } from 'ngx-restangular';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'admin-user-liste',
  templateUrl: './userTable.html',
  styleUrls: ['./admin.scss'],
})
export class AdminComponent {


  private userList;

  //noinspection ReservedWordAsName
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      username: {
        title: 'Username',
        type: 'string',
      },
      email: {
        title: 'E-Mail',
        type: 'string',
      },
      group: {
        title: 'Groups',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource(); // DataSource für die Tabelle

  constructor(private restangular: Restangular) {
    const baseAccounts = this.restangular.all('users');


    baseAccounts.getList().toPromise().then((accounts) => {
      this.source.load(accounts);
      this.source.setPaging(1, 14); // Start on Page 1, 14 Users per Page
    });


  }

  //noinspection JSMethodCanBeStatic
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


}
