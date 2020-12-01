import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-generic-input-field',
  templateUrl: './generic-input-field.component.html',
  styleUrls: ['./generic-input-field.component.css']
})
export class GenericInputFieldComponent implements OnInit {

    myControl = new FormControl();
    filteredOptions: Observable<string[]>;


    @Input()
    placeholder: string = "";

    @Input()
    type: string = "text";

    @Input()
    hints: string[] = [];

    valueInput: string;

  constructor() { }

    ngOnInit(): void {
      // if (this.hints != []) {
          this.filteredOptions = this.myControl.valueChanges
              .pipe(
                  startWith(''),
                  map(value => this._filter(value))
              );
      // }
    }


    private _filter(value: string): string[] {
        const filterValue = value.toString().toLowerCase();

        return this.hints.filter(option => option.toString().toLowerCase().includes(filterValue));
    }
}
