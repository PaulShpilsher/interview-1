import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Address } from '../models/address.model';

const apiUrl = `${environment.serviceUrl}/addresses`;

@Injectable({
    providedIn: 'root'
})
export class AddressService {
    constructor(
        private httpClient: HttpClient) {
    }

    GetAddressByCountry(country: string): Observable<Address[]> {
        const url = `${environment.serviceUrl}/addresses/${country}/searches`
        return this.httpClient.get<Address[]>(url);
    }
}