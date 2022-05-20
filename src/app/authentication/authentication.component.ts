import {Component, OnInit} from '@angular/core';
import {UiStateService} from "../ui-state.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

	/*authForm = new FormGroup(
		{
			name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
			email: new FormControl("", [Validators.required, Validators.email]),
			phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")]),
			address: new FormControl("", [Validators.required, Validators.maxLength(100)])
		}
	);*/

	topPadding?: number;
	topPaddingText?: string;

	constructor(private uiStateService: UiStateService, private router: Router, private activatedRoute: ActivatedRoute) {
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n;
			this.topPaddingText = n + "px";
		})

		this.navigateToLogin()

	}

	navigateToLogin() {
		this.router.navigate(['login'], {relativeTo: this.activatedRoute})
	}

	navigateToRegister() {
		this.router.navigate(['register'], {relativeTo: this.activatedRoute})
	}

	ngOnInit(): void {

	}

}
