import {Component, OnInit} from '@angular/core';
import {UiStateService} from "../ui-state.service";

@Component({
	selector: 'app-blogs',
	templateUrl: './blogs.component.html',
	styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

	topPadding?: number;
	topPaddingText?: string;

	constructor(private uiStateService: UiStateService) {
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n;
			this.topPaddingText = n + "px";
		})
	}

	ngOnInit(): void {
	}

}
