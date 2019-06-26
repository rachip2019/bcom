import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { NgxEchartsModule } from 'ngx-echarts';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
<<<<<<< HEAD
import { LoginBaseComponent } from './login_base/login_base.component';
=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CardComponent } from './dashbord/components/card/card.component';
import { ChartsComponent } from './dashbord/components/charts/charts.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CardNumberComponent } from './dashbord/components/card-number/card-number.component';
/* modules */
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { PieChartComponent } from './dashbord/components/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashbord/components/charts/bar-chart/bar-chart.component';
import { AreaChartComponent } from './dashbord/components/charts/area-chart/area-chart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CustomerComponent } from './customer/index/customer.component';
import { CreateCustomerComponent } from './customer/create/create-customer.component';
import { DashbordTvComponent } from './dashbord-tv/dashbord-tv.component';

=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e

//import * as CanvasJS from './../../assets/js/canvasjs.min.js';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        LayoutModule,
        SharedModule,
        routing,
        NgxEchartsModule,
        ChartsModule,
        WavesModule,
        NgbModule,
        FormsModule,
    ],
    declarations: [
        PagesComponent,
<<<<<<< HEAD
        LoginBaseComponent,
=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
        LoginComponent,
        DashbordComponent,
        CardComponent,
        ChartsComponent,
        DepartmentsComponent,
        CardNumberComponent,
        PieChartComponent,
        BarChartComponent,
        AreaChartComponent,
<<<<<<< HEAD
        CustomerComponent,
        CreateCustomerComponent,
        DashbordTvComponent,
=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
    ],
    bootstrap: [PagesComponent]
})
export class PagesModule { }
