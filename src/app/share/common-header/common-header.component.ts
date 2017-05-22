import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {
  // 父子组件进行通信
  // input 由父组件 传值
  @Input() title:string;
  @Input() isShowCreatButton:boolean;

  constructor() { }

  ngOnInit() {
  }

}
