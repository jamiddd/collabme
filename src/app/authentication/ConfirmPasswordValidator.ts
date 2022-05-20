/** A hero's name can't match the given regular expression */
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function confirmPasswordValidator(testString: string): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const confirmPassword = control.value;
		return confirmPassword !== testString ? {confirmPasswordError: {value: control.value}} : null;
	};
}
