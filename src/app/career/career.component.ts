import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../data/Job";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {docSnapshots} from "@angular/fire/firestore";
import {ActivatedRoute, Router} from "@angular/router";
import {UiStateService} from "../ui-state.service";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

	itemsCollection?: AngularFirestoreCollection<Job>;
	jobs?: Observable<Job[]>
	isLoading: boolean = true

	topPadding?: number
	topPaddingText?: string

	constructor(private af: AngularFirestore, private router: Router, private route: ActivatedRoute, private uiStateService: UiStateService) {
		this.itemsCollection = this.af.collection("jobs", ref => ref.orderBy("createdAt", "asc").limit(10));
		this.jobs = this.itemsCollection.valueChanges()
		this.setStateListener()

		uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n;
			this.topPaddingText = n + "px";
		})

	}

	setStateListener() {
		if (this.jobs !== undefined) {
			this.jobs.subscribe((js) => {
				this.isLoading = false
			})
		}
	}

  	ngOnInit(): void {

  	}

	navigateToJob(id: number) {
		this.router.navigate([id.toString()], {relativeTo: this.route})
	}
}
