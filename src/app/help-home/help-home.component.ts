import {Component, OnInit} from '@angular/core';
import {FrequentlyAskedQuestion} from "../data/FrequentlyAskedQuestion";
import {nanoid} from "nanoid";

@Component({
	selector: 'app-help-home',
	templateUrl: './help-home.component.html',
	styleUrls: ['./help-home.component.css']
})
export class HelpHomeComponent implements OnInit {

	faq1: FrequentlyAskedQuestion = {
		id: nanoid(20),
		question: "Why everything is so complicated?",
		category: "general",
		answer: "Everything is not complicated! We are here to help",
		answeredBy: "Jamid Deka",
		updatedAt: new Date(),
		createdAt: new Date()
	}

	faq2: FrequentlyAskedQuestion = {
		id: nanoid(20),
		question: "Why no version for iPhone?",
		category: "general",
		answer: "We don't have the resources yet.",
		answeredBy: "Luna Barua",
		updatedAt: new Date(),
		createdAt: new Date()
	}

	faq3: FrequentlyAskedQuestion = {
		id: nanoid(20),
		question: "Will there be a web version?",
		category: "general",
		answer: "We are working on it.",
		answeredBy: "Kabir Das",
		updatedAt: new Date(),
		createdAt: new Date()
	}

	faqs: FrequentlyAskedQuestion[] = [this.faq1, this.faq2, this.faq3]

	newStuff = [
		{
			"item": "One-to-one chat",
			"link": "#"
		}, {
			"item": "Fundraiser",
			"link": "#"
		}, {
			"item": "Business profile",
			"link": "#"
		}, {
			"item": "How to create more than one post",
			"link": "#"
		}, {
			"item": "How to remove ads",
			"link": "#"
		}, {
			"item": "Safety",
			"link": "#"
		}
	]

	constructor() {
	}


	ngOnInit(): void {
	}

}
