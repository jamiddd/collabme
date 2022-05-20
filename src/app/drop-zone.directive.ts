import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

	@Output() dropped = new EventEmitter<FileList>();
	@Output() hovered = new EventEmitter<boolean>();

  	constructor() { }


	@HostListener('drop', ['$event'])
	// @ts-ignore
	onDrop($event) {
		$event.preventDefault();
		this.dropped.emit($event.dataTransfer.files);
		this.hovered.emit(false);
	}


	@HostListener('dragover', ['$event'])
	// @ts-ignore
	onDragOver($event) {
		  $event.preventDefault();
		  this.hovered.emit(true)
	}

	@HostListener('dragleave', ['$event'])
	// @ts-ignore
	onDragLeave($event) {
		$event.preventDefault();
		this.hovered.emit(false)
	}


}
