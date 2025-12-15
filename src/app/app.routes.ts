import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Dashboard3 } from './dashboard3/dashboard3';
import { Mahasiswa } from './mahasiswa/mahasiswa';
import { outentikasiGuard } from './outentikasi-guard';
import { Logout } from './logout/logout';
import { Forex } from './forex/forex';
import { Cuaca } from './cuaca/cuaca';
export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full"},
    { path: "admin", component: Admin},
    { path: "cuaca", component: Cuaca, canActivate : [outentikasiGuard]},
    { path: "dashboard", component: Dashboard, canActivate: [outentikasiGuard]},
    { path: "dashboard2", component: Dashboard2, canActivate: [outentikasiGuard]},
    { path: "forex", component: Forex, canActivate: [outentikasiGuard]},
    { path: "dashboard3", component: Dashboard3, canActivate: [outentikasiGuard]},
    { path: "login", component: Login },
    { path: "logout", component: Logout},
    { path: "mahasiswa", component: Mahasiswa, canActivate: [outentikasiGuard]},

];


