import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminAuthenticationComponent} from "./admin-authentication/admin-authentication.component";

const routes: Routes = [
	{
		path: "dashboard",
		component: AdminDashboardComponent
	},
	{
		path: "authentication",
		component: AdminAuthenticationComponent
	}
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
