import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

const routes: Routes = [
	{
		path: "dashboard",
		component: AdminDashboardComponent
	},
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
