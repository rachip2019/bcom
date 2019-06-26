import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
// my links
<<<<<<< HEAD
import { LoginBaseComponent } from './login_base/login_base.component';
import {DashbordComponent} from './dashbord/dashbord.component';
import {DepartmentsComponent} from './departments/departments.component';
import {CustomerComponent} from './customer/index/customer.component';
import {CreateCustomerComponent} from './customer/create/create-customer.component';
import {DashbordTvComponent} from './dashbord-tv/dashbord-tv.component';

=======
import {DashbordComponent} from './dashbord/dashbord.component';
import {DepartmentsComponent} from './departments/departments.component';
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e

export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'departments', pathMatch: 'full' }, 
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
<<<<<<< HEAD
            { path: 'loginBase' , component : LoginBaseComponent },
            // my pages
            { path: 'login' , component : LoginComponent },
            { path: 'dashbord' , component : DashbordComponent },
            { path: 'departments' , component : DepartmentsComponent },
            { path: 'customers' , component : CustomerComponent },
            { path: 'createCustomer' , component : CreateCustomerComponent },
            { path: 'dashbordTV' , component : DashbordTvComponent },
=======
            // my pages
            { path: 'dashbord' , component : DashbordComponent },
            { path: 'departments' , component : DepartmentsComponent },
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
