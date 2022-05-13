import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Navigation} from "../data/Navigation";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Subject, takeUntil} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatMenuTrigger} from "@angular/material/menu";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-navigation-component',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css']
})
export class NavigationComponentComponent implements OnInit, OnDestroy {

	destroyed = new Subject<void>();
	currentScreenSize: string = "";

	displayNameMap = new Map([
		[Breakpoints.XSmall, 'XSmall'],
		[Breakpoints.Small, 'Small'],
		[Breakpoints.Medium, 'Medium'],
		[Breakpoints.Large, 'Large'],
		[Breakpoints.XLarge, 'XLarge'],
	]);

	@Input() navigation?: Navigation;

	constructor(breakPointObserver: BreakpointObserver, private _snackBar: MatSnackBar, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
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
						if (this.currentScreenSize === "XSmall") {
							// @ts-ignore
							this.navigation?.isMinimized = true
						}
					}
				}
			});

		this.matIconRegistry.addSvgIcon(
			'my_svg',
			this.domSanitizer.bypassSecurityTrustResourceUrl('assets/download_new.svg')
		);

	}

	@ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

	openMenu() {
		this.trigger?.openMenu()
	}

	openSnackBar() {

		let snackBarRef = this._snackBar.open(this.currentScreenSize, undefined)
		//
		// this._snackBar.openFromComponent(PizzaPartyComponent, {
		// 	duration: 4000,
		// });
		snackBarRef._open()
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.destroyed.next();
		this.destroyed.complete();
	}

}
