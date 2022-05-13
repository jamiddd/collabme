import {Component, Input, OnInit} from '@angular/core';
import {Feature} from "../data/Feature";

@Component({
  selector: 'app-feature-showcase',
  templateUrl: './feature-showcase.component.html',
  styleUrls: ['./feature-showcase.component.css']
})
export class FeatureShowcaseComponent implements OnInit {

	@Input() feature?: Feature

	constructor() { }

	ngOnInit(): void {

	}

}
