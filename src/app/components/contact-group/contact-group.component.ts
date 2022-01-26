import { Contact } from './../../core/contact';
import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IPrefixGroup } from 'src/app/core/prefixGroup.interface';
import { FormService } from 'src/app/services/form.service';
import { ValidationService } from 'src/app/services/validation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> ContactGroupComponent),
    multi: true
  }]
})
export class ContactGroupComponent implements OnInit, ControlValueAccessor {

  @Output() removeContact = new EventEmitter();

  constructor(
    public vs: ValidationService,
    private formService: FormService) {
  }

  public prefixGroups: IPrefixGroup[] = environment.default.prefixes;
  public formGroup: FormGroup;
  public onChange: any;
  public value: Contact;

  ngOnInit(): void {
    this.formGroup = this.formService.createContactGroup();
    this.formGroup.valueChanges.subscribe(res => this.onChange(res));
  }

  public writeValue(contact: Contact): void {
    this.value = contact;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    console.log('Method not implemented.');
  }

  public remove(): void {
    this.removeContact.emit();
  }

}
