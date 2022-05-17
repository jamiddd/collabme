import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../data/Job";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UiStateService} from "../ui-state.service";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

	jobDoc?: AngularFirestoreDocument<Job>
	job?: Observable<Job>

	topPadding?: number
	topPaddingText?: string

  	constructor(private router: Router, private af: AngularFirestore, private uiStateService: UiStateService) {
		const jobId = this.router.url.split('/')[2]

		this.jobDoc = af.doc("jobs/" + jobId)
		// @ts-ignore
		this.job = this.jobDoc.valueChanges()
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n
			this.topPaddingText = n + "px"
		});

	}

  	ngOnInit(): void {
  	}

}
