import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormService {

  constructor(private fb: FormBuilder) {}

  public createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      contacts: this.fb.array([])
    })
  }

  public createContactControl(): FormGroup {
    return this.fb.group({
      code: ['', Validators.required],
      phone: ['', [Validators.required, this.prefixExistValidator()]],
      status: ['', Validators.required]
    })
  }

  private prefixExistValidator(): Validators {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.parent?.get('code')?.value ? null : { prefixRequired: true };
  }
}
