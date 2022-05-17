import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HelpFeaturesComponent} from "./help-features/help-features.component";
import {HelpHomeComponent} from "./help-home/help-home.component";
import {PrivacyComponent} from "./privacy/privacy.component";
import {TermsComponent} from "./terms/terms.component";
import {HelpFaqsComponent} from "./help-faqs/help-faqs.component";

const routes: Routes = [
	{
		path: "home",
		component: HelpHomeComponent
	},
	{
		path: "features",
		component: HelpFeaturesComponent
	},
	{
		path: "privacy",
		component: PrivacyComponent
	},
	{
		path: "terms",
		component: TermsComponent
	},
	{
		path: "faqs",
		component: HelpFaqsComponent
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
export class HelpRoutingModule { }
