import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import {FeatureShowcaseComponent} from './feature-showcase/feature-showcase.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {AboutComponent} from './about/about.component';
import {MatCardModule} from "@angular/material/card";
import {TeamMemberComponent} from './team-member/team-member.component';
import {PrivacyComponent} from './privacy/privacy.component';
import {MatChipsModule} from "@angular/material/chips";
import {TermsComponent} from './terms/terms.component';
import {HttpClientModule} from "@angular/common/http";
import {CareerComponent} from './career/career.component';
import {JobComponent} from './job/job.component';
import {JobApplicationComponent} from './job-application/job-application.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideFunctions, getFunctions} from '@angular/fire/functions';
import {provideMessaging, getMessaging} from '@angular/fire/messaging';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {AngularFireModule} from "@angular/fire/compat";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BlogsComponent} from './blogs/blogs.component';
import {DropZoneDirective} from './drop-zone.directive';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HelpComponent} from './help/help.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatRippleModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {UiStateService} from "./ui-state.service";
import {HelpFeaturesComponent} from './help-features/help-features.component';
import { HelpHomeComponent } from './help-home/help-home.component';
import { FaqShortComponent } from './faq-short/faq-short.component';
import {MatTreeModule} from "@angular/material/tree";
import { HelpFaqsComponent } from './help-faqs/help-faqs.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { MaterialElevationDirectiveDirective } from './material-elevation-directive.directive';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';

const routes: Routes = [
	{path: "admin", component: AdminComponent, loadChildren: () => import('./admin-routing.module').then((m) => m.AdminRoutingModule)},
	{path: "help", component: HelpComponent, loadChildren: () => import('./help-routing.module').then((m) => m.HelpRoutingModule)},
	{path: "blogs", component: BlogsComponent},
	{path: "career", component: CareerComponent},
	{path: "career/:id", component: JobComponent},
	{path: "career/:id/apply", component: JobApplicationComponent},
	{path: "terms", component: TermsComponent},
	{path: "privacy", component: PrivacyComponent},
	{path: "about", component: AboutComponent},
	{path: "home", component: HomeComponent},
	{path: "", redirectTo: "/home", pathMatch: "full"},
	{path: '**', component: PageNotFoundComponent}
]

@NgModule({
	declarations: [
		AppComponent,
		FeatureShowcaseComponent,
		NavigationComponent,
		HomeComponent,
		AboutComponent,
		TeamMemberComponent,
		PrivacyComponent,
		TermsComponent,
		CareerComponent,
		JobComponent,
		JobApplicationComponent,
		BlogsComponent,
		DropZoneDirective,
		FileUploadComponent,
		HelpComponent,
		PageNotFoundComponent,
		HelpFeaturesComponent,
  HelpHomeComponent,
  FaqShortComponent,
  HelpFaqsComponent,
  BlogCardComponent,
  MaterialElevationDirectiveDirective,
  AdminComponent,
  AdminDashboardComponent,
  AdminAuthenticationComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatDividerModule,
		LayoutModule,
		MatSnackBarModule,
		MatMenuModule,
		RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
		AppRoutingModule,
		MatCardModule,
		MatChipsModule,
		HttpClientModule,
		AngularFireModule.initializeApp(environment.firebase),
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideAnalytics(() => getAnalytics()),
		provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideFunctions(() => getFunctions()),
		provideMessaging(() => getMessaging()),
		provideStorage(() => getStorage()),
		MatStepperModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatRippleModule,
		MatSidenavModule,
		MatListModule,
		MatTreeModule
	],
	providers: [
		ScreenTrackingService, UserTrackingService, UiStateService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
