import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UiStateService} from "../ui-state.service";
import {MatToolbar} from "@angular/material/toolbar";
import {updateDoc} from "@angular/fire/firestore";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-help',
	templateUrl: './help.component.html',
	styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(MatToolbar) el?: MatToolbar
	@ViewChild(MatDrawerContainer) drawerContainer?: MatDrawerContainer
	@ViewChild(MatDrawer) drawer?: MatDrawer

	primaryNavHeight = 0
	topPadding?: string

	totalScrollableHeight?: string

	currentTitle: string = "Home";
	isTermsPolicyOpen: boolean = true;

	constructor(private uiStateService: UiStateService, private router: Router, private activatedRoute: ActivatedRoute) {
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.primaryNavHeight = n
			this.topPadding = `${n}px`;
			console.log("Top padding is " + this.topPadding);
		});

		uiStateService.togglePrimaryFooterVisibility(false);
	}

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		if (this.el !== undefined) {
			const containerHeight = window.innerHeight - this.primaryNavHeight - this.el._elementRef.nativeElement.offsetHeight;
			this.totalScrollableHeight = `${containerHeight-10}px`;
		}

		this.navigateHome()

	}

	toggleTermsPolicyState() {
		this.isTermsPolicyOpen = !this.isTermsPolicyOpen;
		console.log(this.isTermsPolicyOpen);
	}

	ngOnDestroy(): void {
		this.uiStateService.togglePrimaryFooterVisibility(true);
	}

	navigateHome() {
		this.currentTitle = "Home"
		this.router.navigate(["home"], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

	navigateFeatures() {
		this.currentTitle = "Features"
		this.router.navigate(['features'], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

	navigatePrivacyPolicy() {
		this.currentTitle = "Privacy & policy"
		this.router.navigate(['privacy'], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

	navigateTerms() {
		this.currentTitle = "Terms & conditions"
		this.router.navigate(['terms'], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

	navigateFaqs() {
		this.currentTitle = "Frequently asked questions"
		this.router.navigate(['faqs'], {relativeTo: this.activatedRoute})
		this.drawer?.toggle()
	}

}
