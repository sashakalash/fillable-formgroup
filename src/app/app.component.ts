import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormService } from './services/form.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  get contactsArray(): FormArray {
    return this.form?.get('contacts') as FormArray;
  }

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.form = this.formService.createForm();
  }

  public addContact(): void {
    this.contactsArray.push(this.formService.createContactControl());
  }

  public removeContact(index: number): void {
    this.contactsArray.removeAt(index);
  }
}
