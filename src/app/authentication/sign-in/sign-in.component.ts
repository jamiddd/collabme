import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
	selector: 'app-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

	hide = true;

	signInForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(private router: Router, private activatedRoute: ActivatedRoute) {

	}

	ngOnInit() {

	}

	getErrorMessage(): string {
		return "Email is invalid"
	}

	navigateToRegister() {
		this.router.navigate(['auth/register'])
	}
}
