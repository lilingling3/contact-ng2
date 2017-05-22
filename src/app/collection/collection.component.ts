import { Component, OnInit } from '@angular/core';
import { ContactService } from '../share/service/contact.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  collections:any = [];
  contacts:any = {};

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit() {
    this.getCollectionContact();
  }

  getCollectionContact(){
    let ss_contacts = sessionStorage.getItem('contacts');
    if(ss_contacts){
      this.contacts = JSON.parse(ss_contacts);
      for(let i=0;i<this.contacts.length;i++){
        if(this.contacts[i].collection == 1){
          this.collections.push(this.contacts[i])
        }
      }
    }else {
      this.contactService.getContactsData()
        .subscribe(res =>{
          this.contacts = res.json();
          for(let i=0;i<this.contacts.length;i++){
            if(this.contacts[i].collection ==1){
              this.collections.push(this.contacts[i])
            }
          }
        })
    }
  }
}
