import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { IPrefixGroup } from './core/prefixGroup.interface';
import { FormService } from './services/form.service';
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form: FormGroup;

  prefixGroups: IPrefixGroup[] = environment.default.prefixes;

  get contactsArray(): FormArray {
    return this.form?.get('contacts') as FormArray;
  }

  constructor(private formService: FormService,
    public vs: ValidationService,
  ) {}

  ngOnInit() {
    this.form = this.formService.createForm();
    console.log(this.form)
  }

  public addContact(): void {
    this.contactsArray.push(this.formService.createContactControl());
  }

  public removeContact(index: number): void {
    this.contactsArray.removeAt(index);
  }
}
