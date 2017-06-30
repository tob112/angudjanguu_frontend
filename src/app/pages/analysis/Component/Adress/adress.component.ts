/**
 * Created by tobi on 6/30/17.
 */


import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'address',
  templateUrl: 'address.html',
})
export class AddressComponent {
  // we will pass in vector from App component
  @Input('group')
  adressForm: FormGroup;




}
