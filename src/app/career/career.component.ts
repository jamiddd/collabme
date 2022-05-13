import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../data/Job";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

	itemsCollection?: AngularFirestoreCollection<Job>;
	jobs?: Observable<Job[]>

	constructor(private af: AngularFirestore) {
		this.itemsCollection = af.collection("jobs");
		this.jobs = this.itemsCollection.valueChanges()
	}

  	ngOnInit(): void {
  	}

}
