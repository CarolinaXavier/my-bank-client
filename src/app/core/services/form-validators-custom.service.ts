import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FormValidatorsCustom {

    static isValidForms(...forms: FormGroup[]): any {
        let invalidsControls: string[] = [];
        forms.forEach(form => {
            if (!form.valid) {
                Object.keys(form.controls).forEach(control => {
                    const f = form.get(control);
                    if (f) {
                        f.markAsDirty();
                        invalidsControls.push(control);
                    }
                });
            }
        })
        if (invalidsControls.length > 0) {
            return false;
        } else {
            return true;
        }
    }

}