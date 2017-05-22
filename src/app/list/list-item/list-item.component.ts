import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() contact:any = {};
  @Output() routerNavigateEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {

  }

  goDetail(num: number) {
    // 子组件通过事件传递参数
    this.routerNavigateEvent.emit(num);
  }

}

