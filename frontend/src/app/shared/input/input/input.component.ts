import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  providers: [CUSTOM_VALUE_ACCESSOR],
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  
  @Input()
  type: string;

  @Input()
  formControl: FormControl;
  
  constructor() { }

  ngOnInit() {
  }

}
