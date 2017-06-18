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
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a" title="Delete User"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        editable: true,
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
      // group: {
      //   title: 'Groups',
      //   type: 'string',
      // },
    },
    noDataMessage: 'no data',

  };

  public source: LocalDataSource = new LocalDataSource(); // DataSource für die Tabelle


  constructor(private restangular: Restangular) {
  }

  ngOnInit(): void {

    this.baseUsers = this.restangular.all('users');  // api/v1/auth/users/

    this.baseUsers.getList().subscribe(users => {
      this.userList = users;
      this.source.load(this.userList);
      this.source.setPaging(1, 14);  // Start on Page 1, 14 Users per Page
    });

  }


  onCreateConfirm(event): void { // table refresh nach user add fehlt
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


  onEditConfirm(event): void {

    this.baseUsers.get(event.data.id).subscribe((user) => {
      user.username = event.newData.username;
      user.email = event.newData.email;

      user.put().subscribe((response) => {
        console.log('User saved');
        event.confirm.resolve();
      }, (errorResponse) => {
        window.alert(`Error with status code: ${errorResponse.status} -> ${errorResponse.text()}`);
        event.confirm.reject();
      });

    });

  }


}

