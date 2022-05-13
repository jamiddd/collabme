import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from '@angular/material/divider';
import {FeatureShowcaseComponent} from './feature-showcase/feature-showcase.component';
import {NavigationComponentComponent} from './navigation-component/navigation-component.component';
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
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
	{path: "blogs", component: BlogsComponent},
	{path: "career", component: CareerComponent},
	{path: "career/:id", component: JobComponent},
	{path: "career/:id/apply", component: JobApplicationComponent},
	{path: "terms", component: TermsComponent},
	{path: "privacy", component: PrivacyComponent},
	{path: "about", component: AboutComponent},
	{path: "home", component: HomeComponent},
	{path: "", redirectTo: "/home", pathMatch: "full"},
]

@NgModule({
	declarations: [
		AppComponent,
		FeatureShowcaseComponent,
		NavigationComponentComponent,
		HomeComponent,
		AboutComponent,
		TeamMemberComponent,
		PrivacyComponent,
		TermsComponent,
		CareerComponent,
		JobComponent,
		JobApplicationComponent,
  BlogsComponent
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
		MatInputModule
	],
	providers: [
		ScreenTrackingService, UserTrackingService
	],
	bootstrap: [AppComponent]
})
export class AppModule {

}
