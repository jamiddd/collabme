import { Component, OnInit } from '@angular/core';
import {TeamMember} from "../data/TeamMember";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	teamMember1: TeamMember = {
		name: "Luna Barua",
		image: "/assets/team1.jpeg",
		about: "",
		position: "Marketing & Designing"
	}

	teamMember2: TeamMember = {
		name: "Jamid Deka",
		image: "/assets/team2.jpeg",
		about: "",
		position: "Developer & CTO"
	}

	teamMembers: TeamMember[] = [
		this.teamMember1,
		this.teamMember2
	]

  	constructor() { }

  	ngOnInit(): void {
  	}

}
