import { Component } from '@angular/core';
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
      addButtonContent: '<i class="ion-ios-plus-outline" title="Add User"></i>',
      createButtonContent: '<i class="ion-checkmark" title="Create"></i>',
      cancelButtonContent: '<i class="ion-close" title="Cancel"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit" title="Edit User"></i>',
      saveButtonContent: '<i class="ion-checkmark" title="Save"></i>',
      cancelButtonContent: '<i class="ion-close" title="Cancel"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a" title="Delete User"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
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
    noDataMessage: 'loading...',

  };

  source: LocalDataSource = new LocalDataSource(); // DataSource für die Tabelle

  constructor(private restangular: Restangular) {
    const baseAccounts = this.restangular.all('users');  // api/v1/auth/users/


    baseAccounts.getList().toPromise().then((accounts) => {
      this.source.load(accounts);
      this.source.setPaging(1, 14); // Start on Page 1, 14 Users per Page
    });


    this.source.add('lol');


  }

  //noinspection JSMethodCanBeStatic
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }


  //noinspection JSMethodCanBeStatic


}

//
// $scope.addUser = function () {
//             $scope.inserted = {
//                 id: $scope.users.length + 1,
//                 name: '',
//                 status: null,
//                 group: null
//             };
//             $scope.users.push($scope.inserted);
//         };
