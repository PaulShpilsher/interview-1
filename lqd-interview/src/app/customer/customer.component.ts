import { Component } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent {

  constructor(private readonly _service: CustomerService) { }

  firstName: string = ""
  lastName: string = ""
  customer: Customer

  search(): void {
    this._service.GetCustomerByFirstAndLastName(this.firstName, this.lastName)
      .subscribe(x => this.customer = x);
  }

}
