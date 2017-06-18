import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'admin-user-liste',
  templateUrl: './userTable.html',
  styleUrls: ['./admin.scss'],
})
export class AdminComponent implements OnInit {


  private userList;
  private baseUsers;

  //noinspection ReservedWordAsName
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline" title="Add User"></i>',
      createButtonContent: '<i class="ion-checkmark" title="Create"></i>',
      cancelButtonContent: '<i class="ion-close" title="Cancel"></i>',
      confirmCreate: true,
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
      // group: {
      //   title: 'Groups',
      //   type: 'string',
      // },
    },
    noDataMessage: 'loading...',

  };

  public source: LocalDataSource = new LocalDataSource(); // DataSource für die Tabelle


  constructor(private restangular: Restangular) {
  }

  ngOnInit(): void {

    this.baseUsers = this.restangular.all('users');  // api/v1/auth/users/

    this.baseUsers.getList().subscribe(users => {
      this.source.load(users);
      this.source.setPaging(1, 14);  // Start on Page 1, 14 Users per Page
    });

  }


  onCreate(event): void { // table refresh nach user add fehlt

    const newUser = event.newData;

    this.baseUsers.post(newUser).subscribe((response) => {
      event.confirm.resolve();  // erstellt user in table wenn post funktioniert
    }, (errorResponse) => {
      window.alert(`Error with status code: ${errorResponse.status} -> ${errorResponse.text()}`);
      event.confirm.reject(); // erstellt user nicht in table
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

