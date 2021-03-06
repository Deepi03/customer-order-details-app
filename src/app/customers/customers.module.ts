import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; //we want to use imports from parent module so no need of browser module but needs common module
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox/filter-textbox.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent],
  imports: [
    CommonModule,SharedModule , FormsModule,CustomersRoutingModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
