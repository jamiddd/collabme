import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SignInComponent} from "./authentication/sign-in/sign-in.component";
import {RegisterComponent} from "./authentication/register/register.component";

const routes: Routes = [
	{
		path: "login",
		component: SignInComponent
	},
	{
		path: "register",
		component: RegisterComponent
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
export class AuthRoutingModule { }
