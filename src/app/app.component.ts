import { Component } from '@angular/core';
import {Navigation} from "./data/Navigation";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'collabme';

	/* navigations */
	navigation: Navigation = {
		title: "CollabMe",
		logo: "/assets/collab_me_blue_logo_night.svg",
		home: "/",
		items: [],
		routes: [],
		isMinimized: false
	}

	constructor(firestore: AngularFirestore) {

	}

}
