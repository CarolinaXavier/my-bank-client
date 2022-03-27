
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsAplyCSS {

    public applyInvalidClass(form: FormGroup, field: string) {
        return {
            'is-invalid': this.virifyValidTouched(form, field),
            'has-feedback': this.virifyValidTouched(form, field)
        }
    }

    public virifyValidTouched(form: FormGroup | any, field: string) {
        return !form.get(field).valid && (form.get(field).touched || form.get(field).dirty);
    }

}