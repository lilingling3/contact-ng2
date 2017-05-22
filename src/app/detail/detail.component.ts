import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ContactService } from '../share/service/contact.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnDestroy {
  private contact_id :number;
  private detail:any = {};
  private contacts:any = {};
  private sub:any;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private contactService:ContactService
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.params
      .subscribe(params =>{
        this.contact_id = params['id'];
        this.getContactById(this.contact_id);
      })
  }
  // 销毁
  ngOnDestroy(){
      this.sub.unsubscribe();
  }

  getContactById(id:number){
    let ss_contacts = sessionStorage.getItem('contacts');
    if(!ss_contacts){
      this.contactService.getContactsData()
        .subscribe(res =>{
          this.contacts = res.json();

         /* this.detail = this.contacts.filter(function (contact,index) {
            return contact.id == id
          })[0];*/
          this.detail = this.contacts[id-1];
          //console.log(this.detail)
        })
    }else {
      this.contacts = JSON.parse(ss_contacts);
      this.detail = this.contacts[id-1]
    }
  }

  editContact(){
    // 跳转编辑 某一个进行编辑
    this.router.navigate(['/edit',this.contact_id])
  }

  collectTheContact(){

    console.log('this.detail.collection'+this.detail.collection);
    // 取反
    //noinspection JSAnnotator
    this.detail.collection != 0 ? this.detail.collection = 0 : this.detail.collection = 1;
    // 设置
    // 有个技巧   this.contacts[this.contact_id-1]
    this.contacts[this.contact_id-1].collection = this.detail.collection;

    let ss_contacts = sessionStorage.getItem('contacts');
    this.contacts = JSON.parse(ss_contacts);
    this.contacts[this.contact_id -1].collection = this.detail.collection;
    sessionStorage.setItem('contacts',JSON.stringify(this.contacts))
  }
}
