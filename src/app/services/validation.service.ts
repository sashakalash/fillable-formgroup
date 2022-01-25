import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ValidationService {

  public validate(control: FormControl): void {
    control.updateValueAndValidity()
  }

}
