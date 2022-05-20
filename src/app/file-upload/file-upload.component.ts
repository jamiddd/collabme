import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {finalize, map, Observable} from "rxjs";
import {UploadTaskSnapshot} from "@angular/fire/compat/storage/interfaces";
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
	selector: 'app-file-upload',
	templateUrl: './file-upload.component.html',
	styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

	/*
	* Upload states
	* */
	SUCCESS: string = "success"
	RUNNING: string = "running"
	FAILED: string = "failed"

	/*
	* Progress ui properties
	* */
	color: ThemePalette = 'primary';
	mode: ProgressSpinnerMode = 'indeterminate';
	value = 0;


	/*
	* Current upload task
	* */
	task?: AngularFireUploadTask;


	/*
	* Need to output the url of the uploaded file
	* */
	@Output() fileName = new EventEmitter<string>();
	@Output() fileUrl = new EventEmitter<string>();



	/*
	*
	* Trying new state change params
	*
	* */
	uploadState?: string

	localFileName?: string

	snapshot?: Observable<UploadTaskSnapshot>;

	downloadUrl?: Observable<string>;

	isHovering: boolean = false;

	error?: string

	percentage?: Observable<number>;

	constructor(private storage: AngularFireStorage) {

	}

	toggleHover(event: boolean) {
		this.isHovering = event
		this.error = undefined
	}

	ngOnInit(): void {
		// @ts-ignore
	}

	setStateListener(ref: AngularFireStorageReference) {
		if (this.task !== undefined) {
			this.task.snapshotChanges()
				.pipe(
					finalize(() => {
						ref.getDownloadURL().subscribe( (r: string) => {
							this.fileUrl.emit(r)
						});
					})
				).subscribe((taskSnapshot) => {
					if (taskSnapshot !== undefined) {
						this.uploadState = taskSnapshot.state
					}
				})

		}
	}

	resetFileUpload() {
		this.fileUrl.emit(undefined)
		this.fileName.emit(undefined)
		this.uploadState = undefined
		this.error = undefined
		this.percentage = undefined
		this.localFileName = undefined
		this.downloadUrl = undefined
		this.task = undefined
	}

	startUpload(event?: FileList) {

		if (event === undefined)
			return;

		this.error = undefined

		const file = event.item(0)!;
		const parts = file.name.split('.');

		const ext = parts[parts.length - 1];
		if (!(ext === "pdf" || ext === "docx")) {
			this.error = "Unsupported file type: " + ext
			return;
		}

		// @ts-ignore
		this.fileName.emit(file.name)
		this.localFileName = file.name

		const path = `documents/resumes/${new Date().getTime()}_${file.name}`;

		const ref = this.storage.ref(path)

		this.task = this.storage.upload(path, file);

		this.setStateListener(ref)

		this.task.snapshotChanges().pipe(
			finalize(() => {
				ref.getDownloadURL().subscribe( (r: string) => {
					this.fileUrl.emit(r)
				});

			})
		).subscribe()

	}

}
