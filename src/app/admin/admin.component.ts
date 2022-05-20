import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {UiStateService} from "../ui-state.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

	@ViewChild(MatToolbar) toolbar?: MatToolbar
	@ViewChild(MatDrawerContainer) drawerContainer?: MatDrawerContainer
	@ViewChild(MatDrawer) drawer?: MatDrawer

	topPadding?: number;
	topPaddingText?: string;

	primaryNavHeight = 0

	totalScrollableHeight?: string
	currentTitle: string = "Dashboard";

	constructor(uiStateService: UiStateService, private router: Router, private activatedRoute: ActivatedRoute, public auth: AngularFireAuth) {
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.primaryNavHeight = n

			this.topPadding = n;
			this.topPaddingText = n + "px";
		})

		uiStateService.togglePrimaryFooterVisibility(false);
	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		if (this.toolbar !== undefined) {
			const containerHeight = window.innerHeight - this.primaryNavHeight - this.toolbar._elementRef.nativeElement.offsetHeight;
			this.totalScrollableHeight = `${containerHeight-10}px`;
		}

		this.navigateDashboard()
	}

	navigateDashboard() {
		this.currentTitle = "Dashboard"
		this.router.navigate(["dashboard"], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

}
