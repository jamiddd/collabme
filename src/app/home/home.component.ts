import {Component, Input, OnInit} from '@angular/core';
import {Feature} from "../data/Feature";
import {TeamMember} from "../data/TeamMember";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, takeUntil} from "rxjs";
import {UiStateService} from "../ui-state.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	currentScreenSize?: string
	destroyed = new Subject<void>();

	displayNameMap = new Map([
		[Breakpoints.XSmall, 'XSmall'],
		[Breakpoints.Small, 'Small'],
		[Breakpoints.Medium, 'Medium'],
		[Breakpoints.Large, 'Large'],
		[Breakpoints.XLarge, 'XLarge'],
	]);


	feature: Feature = {
		heading: "Chat and communicate",
		content: "Connect with people and start collaborating right away. Share your ideas and plans in the chat and create effective planing through chat.",
		image: "/assets/chat1.png",
		contentBottom: false
	}

	feature1: Feature = {
		heading: "Explore collaborations",
		content: "Search through thousands of collaborations currently happening and join them. Make a great experience by learning while doing something together.",
		image: "/assets/explore.png",
		contentBottom: true
	}

	features: Feature[] = [this.feature, this.feature1]

	teamMember1: TeamMember = {
		name: "Luna Barua",
		image: "/assets/team1.jpeg",
		about: "",
		position: "Design & Marketing"
	}

	teamMember2: TeamMember = {
		name: "Jamid Deka",
		image: "/assets/team2.jpeg",
		about: "",
		position: "Developer & CTO"
	}

	teamMember3: TeamMember = {
		name: "Bishal Dutta",
		image: "/assets/team3.jpg",
		about: "",
		position: "Human Resources"
	}

	teamMember4: TeamMember = {
		name: "Kabir Das",
		image: "/assets/team4.jpg",
		about: "",
		position: "Software Developer"
	}

	teamMember5: TeamMember = {
		name: "Anubhav Deka",
		image: "/assets/team5.jpg",
		about: "",
		position: "UX Designer"
	}

	teamMembers: TeamMember[] = [
		this.teamMember1,
		this.teamMember2,
		this.teamMember3,
		this.teamMember4,
		this.teamMember5
	]


	/*topPadding?: number
	topPaddingText?: string
	coverHeight?: number
	coverHeightText?: string
*/

	constructor(
		breakPointObserver: BreakpointObserver,
		private _snackBar: MatSnackBar,
		private uiStateService: UiStateService
	) {
		breakPointObserver.observe([
			Breakpoints.XSmall,
			Breakpoints.Small,
			Breakpoints.Medium,
			Breakpoints.Large,
			Breakpoints.XLarge,
		]).pipe(takeUntil(this.destroyed))
			.subscribe(result => {
				for (const query of Object.keys(result.breakpoints)) {
					if (result.breakpoints[query]) {
						this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
					}
				}
			});

		/*uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n;
			this.topPaddingText = n + "px";

			this.coverHeight = window.innerHeight - this.topPadding;
			this.coverHeightText = this.coverHeight + "px";

			console.log("Top padding is : " + this.topPaddingText);
		})*/

	}

	ngOnInit(): void {
	}

}
