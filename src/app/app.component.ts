import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Navigation} from "./data/Navigation";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {UiStateService} from "./ui-state.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
	title = 'collabme';

	currentScreenSize?: string
	destroyed = new Subject<void>();

	displayNameMap = new Map([
		[Breakpoints.XSmall, 'XSmall'],
		[Breakpoints.Small, 'Small'],
		[Breakpoints.Medium, 'Medium'],
		[Breakpoints.Large, 'Large'],
		[Breakpoints.XLarge, 'XLarge'],
	]);

	primaryFooterVisibility = true

	@ViewChild("footer") fooEl?: ElementRef

	setNavNotificationState(state: boolean) {
		this.uiStateService.setNavNotificationState(state);
	}

	/* navigations */
	navigation: Navigation = {
		title: "CollabMe",
		logo: "/assets/collab_me_blue_logo_night.svg",
		home: "/",
		items: [],
		routes: [],
		screenSize: this.currentScreenSize,
		notification: "Currently available only on android."
	}

	constructor(
		breakPointObserver: BreakpointObserver,
		private _snackBar: MatSnackBar,
		private uiStateService: UiStateService
	) {

		if (this.navigation.notification !== undefined) {
			this.setNavNotificationState(true)
		}

		breakPointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge,
		]).pipe(takeUntil(this.destroyed))
			.subscribe(result => {
				for (const query of Object.keys(result.breakpoints)) {
					if (result.breakpoints[query]) {
						this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
						if (this.navigation !== undefined) {
							this.navigation.screenSize = this.currentScreenSize
						}
					}
				}
			});


		uiStateService.primaryFooterVisibility.subscribe( (v) => {
			this.primaryFooterVisibility = v
		})


	}

	ngOnDestroy(): void {
		this.destroyed.next();
		this.destroyed.complete();
	}

	ngAfterViewInit(): void {
		if (this.fooEl !== undefined) {
			const bottomOffset = this.fooEl.nativeElement.offsetHeight;
			this.uiStateService.setFooterOffset(bottomOffset);
		}
	}

}
