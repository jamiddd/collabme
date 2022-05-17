import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UiStateService} from "../ui-state.service";

@Component({
	selector: 'app-terms',
	templateUrl: './terms.component.html',
	styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

	topPadding?: number
	topPaddingText?: string

	constructor(private router: Router, private uiStateService: UiStateService) {
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
