import {Component, Input, OnInit} from '@angular/core';
import {UiStateService} from "../ui-state.service";
import {Router} from "@angular/router";

@Component({
	selector: 'app-privacy',
	templateUrl: './privacy.component.html',
	styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

	topPadding?: number
	topPaddingText?: string

	constructor(uiStateService: UiStateService, private router: Router) {
	  	uiStateService.primaryNavOffset.subscribe((n) => {
			if (this.router.url.indexOf("help") === -1) {
				this.topPadding = n
				this.topPaddingText = n + "px"
			}
		})
	}

	ngOnInit(): void {

	}

}
