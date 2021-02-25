import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'bsouza',
        loadChildren: () => import('./bsouza/bsouza.module').then(m => m.BsouzaModule),
    },
    {
        path: 'addresses',
        loadChildren: () => import('./address/address.module').then(m => m.AddressModule),
    },
    {
        path: 'customers',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    },


]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
