import { Component, OnInit } from '@angular/core';
import { ContactService } from '../share/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private contacts;
  constructor(
    private contactService:ContactService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  public getContacts(){
    // 模拟数据库，在这里
    let ss_contacts = sessionStorage.getItem('contacts');
    if(!ss_contacts){
      this.contactService.getContactsData()
        .subscribe(res =>{
            let contacts = res.json()
            //console.log(contacts);
            this.contacts = contacts;
            sessionStorage.setItem('contacts',JSON.stringify(contacts))
          }, error=>console.log(error)
        )
    }else {
      this.contacts = JSON.parse(ss_contacts);
    }

  }

  public addContact(){
    this.router.navigate(['edit'])
  }

  public routerNavigate(id:number){
    // 事件跳转路由
    // 改变路由 添加不同参数
    this.router.navigate(['/list',id])
  }
}
