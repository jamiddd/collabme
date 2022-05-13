import { Component, OnInit } from '@angular/core';
import {Feature} from "../data/Feature";
import {TeamMember} from "../data/TeamMember";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	/* features */

	feature: Feature = {
		heading: "Chat and communicate",
		content: "WhatsApp Business is a free to download app that was built " +
			"with the small business owner in mind. Create a catalog to " +
			"showcase your products and services. Connect with your " +
			"customers easily by using tools to automate, sort and " +
			"quickly respond to messages. WhatsApp can also help medium " +
			"and large businesses provide customer support and deliver " +
			"important notifications to customers. Learn more about " +
			"WhatsApp Business API.",
		image: "/assets/chat1.png",
		contentLeft: false
	}

	feature1: Feature = {
		heading: "Explore awesome projects",
		content: "WhatsApp Business is a free to download app that was built " +
			"with the small business owner in mind. Create a catalog to " +
			"showcase your products and services. Connect with your " +
			"customers easily by using tools to automate, sort and " +
			"quickly respond to messages. WhatsApp can also help medium " +
			"and large businesses provide customer support and deliver " +
			"important notifications to customers. Learn more about " +
			"WhatsApp Business API.",
		image: "/assets/explore.png",
		contentLeft: true
	}

	features: Feature[] = [this.feature, this.feature1]

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
