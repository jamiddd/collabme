import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-blog-card',
	templateUrl: './blog-card.component.html',
	styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

	defaultHeight: number = 2
	raisedHeight: number = 8

	constructor() {
	}

	ngOnInit(): void {
	}

}
