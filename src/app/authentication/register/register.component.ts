import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {confirmPasswordValidator} from "../ConfirmPasswordValidator";

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	oldPassword: string = ""

	createAccountFormGroup = new FormGroup({
			name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
			email: new FormControl("", [Validators.required, Validators.email]),
			password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$")]),
			confirmPassword: new FormControl("", [Validators.required, Validators.pattern("^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"), confirmPasswordValidator(this.oldPassword)],)
		}
	)

	hide: boolean = true
	confirmHide: boolean = true

	constructor(private router: Router) {

	}

	ngOnInit(): void {
	}

	navigateToLogin() {
		this.router.navigate(['auth/login'])
	}
}
