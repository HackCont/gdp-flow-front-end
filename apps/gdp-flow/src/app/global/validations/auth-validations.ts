import { Validators } from "@angular/forms";

export const EMAIL_VALIDATION = [Validators.required, Validators.email];
export const PASSWORD_VALIDATION = [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(20),
];