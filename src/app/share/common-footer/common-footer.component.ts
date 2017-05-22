import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-common-footer',
  templateUrl: './common-footer.component.html',
  styleUrls: ['./common-footer.component.css']
})
export class CommonFooterComponent implements OnInit {
  // 设置默认值
  private isListPage:boolean = true;
  constructor(
    private location :Location
  ) { }

  ngOnInit() {
    // 默认跳转到 /list
    this.isListPage = this.location.path() == '' || this.location.path().indexOf('/list')>-1
  }

}
