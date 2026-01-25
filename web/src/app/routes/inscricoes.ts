import { Routes } from "@angular/router";
import {Login} from "@features/login/login";
import { sidenavRoutes } from "../features/sidenav/sidenav.route";

export const loginRoute: Routes = [
  { path: 'login', component: Login },
  {
    path: '',
    children: sidenavRoutes
  }
]
