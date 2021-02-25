import { Component } from '@angular/core';
import { Address } from '../models/address.model';
import { AddressService } from '../services/address.service ';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html'
})
export class AddressComponent {

  constructor(private readonly _service: AddressService) { }

  country: string = ""
  addresses: Address[] = []

  search(): void {
    this._service.GetAddressByCountry(this.country)
      .subscribe(x => this.addresses = x);
  }

}
