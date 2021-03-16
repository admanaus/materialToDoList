import { Component, OnInit, EventEmitter } from '@angular/core';
import { IListItem } from './list-item.interface'

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  selectedItem: IListItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: IListItem): void {
    this.selectedItem = item;
  }

  onDone($event: any) {
    console.log("done with: ", $event);
    this.selectedItem = undefined;
  }

  checked: Boolean = false;
  toDoList: Array<IListItem> = 
  [ {description: "Go to work", isComplete: false},
    {description: "Watch Modern Family", isComplete: true},
    {description: "Pet the cat", isComplete: true},
    {description: "Go to bed early", isComplete: false}];

}
