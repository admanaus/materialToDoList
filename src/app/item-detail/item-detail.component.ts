import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { IListItem } from '../main-body/list-item.interface';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: IListItem;
  @Output() done = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  whenDone() {
    this.done.emit(this.item?.description);
  }

}
