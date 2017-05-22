import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ContactService } from '../share/service/contact.service';
import { UtilService } from '../share/service/util.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private isAdd:boolean;
  private operateTitle:string;
  private editId:number;
  private contacts:any = {};
  private contact:any = {};
  private isName:boolean = false;
  private isPhoneNum:boolean = false;
  private isAddr:boolean = false;
  private isEmail:boolean = false;
  private isBir:boolean = false;
  private nameTip:boolean = false;
  private phoneTip:boolean = false;
  private addrTip:boolean = false;
  private emailTie:boolean = false;
  private birTip:boolean = false;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private location:Location,
    private contactService:ContactService,
    private utilService:UtilService
  ) { }

  ngOnInit() {
    this.getContacts();
    this.activatedRoute.params.subscribe(params=>{
      this.editId = params['id'];
      // 有id 就是编辑 没有就是新建
      this.isAdd = !this.editId;
    });

    this.operateTitle = this.isAdd?'新建联系人':'编辑联系人';

    if(!this.isAdd){
      this.getContactById(this.editId)
    }
  }

  submitForm(){
    this.nameTip = true;
    this.phoneTip = true;
    this.addrTip = true;
    this.emailTie = true;
    this.birTip = true;

    if(this.isName&&this.isPhoneNum&& this.addrTip&&this.emailTie&&this.birTip){
      if(this.isAdd){
        this.addContact()
      }else{
        this.editContact()
      }

    }
  }

  getContacts(){
    this.contactService.getContactsData()
      .subscribe(data =>{
        this.contacts = data.json();
      })
  }

  getContactById(id:number){
    let ss_contacts = sessionStorage.getItem('contacts');
    if(ss_contacts){
      this.contacts = JSON.parse(ss_contacts);
      this.contact = this.contacts[id -1];
    }else {
      this.contactService.getContactsData()
        .subscribe(data =>{
          this.contacts = data.json();
          this.contact = this.contacts[id-1]
        })
    }

  }


  addContact(){
    let contacts_length = this.contacts.length;
    let new_id = this.contacts[contacts_length-1].id +1;

    let new_contact = {
      "id": new_id,
      "name": this.contact.name,
      "telNum": this.contact.telNum,
      "address": this.contact.address,
      "email":this.contact.email ,
      "birthday": this.contact.birthday,
      "collection":0
    };

    this.contacts.push(new_contact);
    sessionStorage.setItem('contacts',JSON.stringify(this.contacts));
    this.router.navigate([''])
  }

  editContact(){
    let edit_contact = {
      "id": this.editId,
      "name": this.contact.name,
      "telNum": this.contact.telNum,
      "address": this.contact.address,
      "email":this.contact.email ,
      "birthday": this.contact.birthday,
      "collection":0
    };

    let ss_contacts = sessionStorage.getItem('contacts');
    this.contacts = JSON.parse(ss_contacts);
    this.contacts.splice(this.editId-1,1,edit_contact);
    sessionStorage.setItem('contacts',JSON.stringify(this.contacts));
    this.router.navigate(['/list',this.editId])
  }

  cancelOperate(){
    this.location.back()
  }

  onBlurName(){
    this.nameTip = true;
    this.isName = this.contact.name?true:false
  }

  onBlurBir() {
    this.birTip = true;
    this.isBir = this.contact.birthday ? true : false;
  }

  onBlurAddr() {
    this.addrTip = true;
    this.isAddr = this.contact.address ? true : false;
  }

  onBlurPhone(){
    this.phoneTip = true;
    this.isPhoneNum = this.utilService.checkPhoneNum(this.contact.telNum);
  }

  onBlurEmail(){
    this.emailTie = true;
    this.isEmail = this.utilService.checkEmail(this.contact.email);
  }
}
