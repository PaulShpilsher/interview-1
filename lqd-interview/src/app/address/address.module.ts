import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './addressrouting.module';
import { AddressService } from '../services/address.service ';



@NgModule({
  declarations: [AddressComponent],
  imports: [
    CommonModule,
    AddressRoutingModule
  ],
  providers: [
  ]
})
export class AddressModule { }
