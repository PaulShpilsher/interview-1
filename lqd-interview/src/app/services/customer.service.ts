import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Customer, CustomerSearchRequest, toCustomerSearchRequest } from '../models/customer.model';

const apiUrl = `${environment.serviceUrl}/customers`;

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(
        private httpClient: HttpClient) {
    }

    GetCustomerByFirstAndLastName(firstName: string, lastName: string): Observable<Customer> {
        return this.httpClient.post<Customer>(apiUrl,
            toCustomerSearchRequest(firstName, lastName));
    }
}