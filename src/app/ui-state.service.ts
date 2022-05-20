import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

	isNavNotificationEnabled: boolean = false

	primaryNavOffset = new BehaviorSubject<number>(56)
	footerOffset = new BehaviorSubject<number>(100)

	primaryFooterVisibility = new BehaviorSubject<boolean>(true)


	setNavNotificationState(state: boolean) {
		this.isNavNotificationEnabled = state
	}

	setPrimaryNavOffset(n: number) {
		this.primaryNavOffset.next(n)
	}

	setFooterOffset(n: number) {
		this.footerOffset.next(n)
	}

	togglePrimaryFooterVisibility(visible: boolean) {
		this.primaryFooterVisibility.next(visible)
	}

  	constructor() {

  	}
}
