import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../data/Job";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

	jobDoc?: AngularFirestoreDocument<Job>
	job?: Observable<Job>

  	constructor(private router: Router, private af: AngularFirestore) {
		const jobId = this.router.url.split('/')[2]

		this.jobDoc = af.doc("jobs/" + jobId)
		// @ts-ignore
		this.job = this.jobDoc.valueChanges()
	}

  	ngOnInit(): void {
  	}

}
