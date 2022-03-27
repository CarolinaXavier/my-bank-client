import { FormGroup, Validators } from "@angular/forms"
import { AddressInterface } from "./address.interface"

export class User {

    name: string | null = null
    lastName: string | null = null
    cpf: string | null = null
    email: string | null = null
    telephone: string | null = null
    address: AddressInterface = new AddressInterface()
    password: string | null = null
    isDeleted: boolean = false
    active: boolean = true

    public createFormPersonalData() {
        return {
            name: [this.name, Validators.required],
            lastName: [this.lastName, Validators.required],
            cpf: [this.cpf, Validators.required],
            email: [this.email, Validators.required],
            telephone: [this.telephone, Validators.required],
            address: [this.address, [Validators.required]]
        }
    }

    public createFormAddress() {
        return {
            place: [this.address.place, [Validators.required]],
            addressNumber: [this.address.addressNumber, [Validators.required]],
            complement: [this.address.complement],
            district: [this.address.district, [Validators.required]],
            city: [this.address.city, [Validators.required]],
            state: [this.address.state, [Validators.required]],
            zipcode: [this.address.zipcode, [Validators.required]]
        }
    }

    public createFormPassword() {
        return {
            password: [this.password, [Validators.required]],
            repeatPassword: [null, [Validators.required]]
        }
    }

    public getFormValuesPersonalData(form: FormGroup) {
        this.name = form.value.name
        this.lastName = form.value.lastName
        this.cpf = form.value.cpf
        this.email = form.value.email
        this.telephone = form.value.telephone
        this.address = form.value.address
        this.password = form.value.password
    }

    public getFormValuesAddress(form: FormGroup) {
        this.address.place = form.value.place;
        this.address.addressNumber = form.value.addressNumber;
        this.address.complement = form.value.complement;
        this.address.district = form.value.district;
        this.address.city = form.value.city;
        this.address.state = form.value.state;
        this.address.zipcode = form.value.zipcode;
    }

    public getFormValuesPassword(form: FormGroup) {
        this.password = form.value.password;
    }
}