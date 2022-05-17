import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Navigation} from "../data/Navigation";
import {MatMenuTrigger} from "@angular/material/menu";
import {BehaviorSubject, Observable} from "rxjs";
import {UiStateService} from "../ui-state.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, AfterViewInit {

	@Input() navigation?: Navigation;


	@ViewChild(MatMenuTrigger) trigger?: MatMenuTrigger;

	@ViewChild("primaryToolbar") el?: ElementRef

	constructor(private uiStateService: UiStateService) {

	}

	openMenu() {
		this.trigger?.openMenu()
	}

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {
		if (this.el !== undefined) {
			const totalOffset = this.el.nativeElement.offsetHeight
			this.uiStateService.setPrimaryNavOffset(totalOffset)
		}
	}

}
