import {Component, Input, OnInit} from '@angular/core';
import {TeamMember} from "../data/TeamMember";

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

	@Input() teamMember?: TeamMember

  	constructor() { }

  	ngOnInit(): void {
  	}

}
