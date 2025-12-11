import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-slice',
  imports: [],
  templateUrl: './slice.html',
  styleUrl: './slice.css',
})
export class Slice {
  slice: InputSignal<ISlice> = input.required<ISlice>()

}
