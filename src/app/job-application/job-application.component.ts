import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {JobApplication} from "../data/JobApplication";
import {collection, doc, Firestore, setDoc} from "@angular/fire/firestore";
import { nanoid } from 'nanoid'
import {ActivatedRoute, Router} from "@angular/router";
import {UiStateService} from "../ui-state.service";

@Component({
	selector: 'app-job-application',
	templateUrl: './job-application.component.html',
	styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

	firstFormGroup?: FormGroup;
	secondFormGroup?: FormGroup;

	uploadedFileUrl?: string
	resumeUploaded = false
	name?: FormControl;

	topPadding?: number;
	topPaddingText?: string;

	constructor(private uiStateService: UiStateService, private _formBuilder: FormBuilder, private firestore: Firestore, private router: Router) {
		uiStateService.primaryNavOffset.subscribe((n) => {
			this.topPadding = n
			this.topPaddingText = n + "px";
		});
	}

	onFileUploaded(file?: any) {

		console.log("File uploaded: " + file)

		this.uploadedFileUrl = file

		if (file !== undefined) {
			this.resumeUploaded = true
		}
	}

	ngOnInit(): void {

		this.firstFormGroup = new FormGroup(
			{
				name: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
				email: new FormControl("", [Validators.required, Validators.email]),
				phone: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")]),
				address: new FormControl("", [Validators.required, Validators.maxLength(100)])
			}
		)

		this.secondFormGroup = new FormGroup(
			{
				school: new FormControl("", [Validators.required, Validators.maxLength(100)]),
				schoolScore: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{0,2}\\.[0-9]{0,2}$")]),
				college: new FormControl("", [Validators.required, Validators.maxLength(100)]),
				collegeScore: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{0,2}\\.[0-9]{0,2}$")])
			}
		);

	}

	uploadJobApplication() {
		const jobApplicationsRef = collection(this.firestore, "jobApplications");

		const id = nanoid(20)

		const name = this.firstFormGroup?.get("name")?.value as string;
		const email = this.firstFormGroup?.get("email")?.value as string;
		const phone = this.firstFormGroup?.get("phone")?.value as string;
		const address = this.firstFormGroup?.get("address")?.value as string;
		const school = this.secondFormGroup?.get("school")?.value as string;
		const schoolPercentage = this.secondFormGroup?.get("schoolScore")?.value as string;
		const college = this.secondFormGroup?.get("college")?.value as string;
		const collegePercentage = this.secondFormGroup?.get("collegeScore")?.value as string;

		const jobApplication: JobApplication = {
			id,
			name,
			email,
			phone,
			address,
			school,
			schoolPercentage,
			college,
			collegePercentage,
			resumeLink: this.uploadedFileUrl!,
			createdAt: new Date()
		};

		const ref = doc(jobApplicationsRef, jobApplication.id)

		return setDoc(ref, jobApplication).then( () => {
			this.delayedRedirect();
		}, (error) => {
			console.log(error);
		});
	}

	redirectText: string = "You'll be redirected to home in 5 seconds"
	timer?: number

	delayedRedirect() {
		setTimeout(() => {
			this.redirectText = `You'll be redirected to home in 4 seconds`
			setTimeout(() => {
				this.redirectText = `You'll be redirected to home in 3 seconds`
				setTimeout(() => {
					this.redirectText = `You'll be redirected to home in 2 seconds`
					setTimeout(() => {
						this.redirectText = `You'll be redirected to home in 1 second`
						setTimeout(() => {
							this.redirectText = `You'll be redirected to home in 0 seconds`
							this.router.navigate(['/']).then(() => {});
						}, 1000)
					}, 1000)
				}, 1000)
			}, 1000)
		}, 1000)
	}

	killTimer() {
		clearTimeout(this.timer)
	}

}
