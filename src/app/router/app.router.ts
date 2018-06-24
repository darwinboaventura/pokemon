import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { DetailComponent } from '@pages/detail/detail.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { state: 'home' }
    },
    {
        path: 'detail/:pokemon',
        component: DetailComponent,
        data: { state: 'detail' }
    }
]