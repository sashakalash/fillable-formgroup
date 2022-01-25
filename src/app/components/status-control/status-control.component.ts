import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const enum StatusEnum {
  FAVORITE = 'FAVORITE',
  WORK = 'WORK',
  SMS = 'SMS'
}

@Component({
  selector: 'app-status-control-component',
  templateUrl: './status-control.component.html',
  styleUrls: ['./status-control.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: StatusControlComponent,
    multi: true
  }]
})
export class StatusControlComponent implements OnInit, ControlValueAccessor {

  @ViewChild('counterInput') counterInput: ElementRef;

  public onChange: any;
  public value: StatusEnum;
  private counter: number = 0;
  private statuses: StatusEnum[] = [
    StatusEnum.FAVORITE,
    StatusEnum.WORK,
    StatusEnum.SMS
  ];

  public readonly FAVORITE = StatusEnum.FAVORITE;
  public readonly WORK = StatusEnum.WORK;
  public readonly SMS = StatusEnum.SMS;

  constructor() {}

  get status() {
    return this.statuses[this.counter];
  }

  ngOnInit(): void {
  }

  public writeValue(value: StatusEnum): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    console.log('Method not implemented.');
  }

  public onClick() {
    this.counter = this.counter + 1 === this.statuses.length ? 0 : this.counter + 1;
    this.writeValue(this.status);
  }
}
