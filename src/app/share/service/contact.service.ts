import { Injectable } from '@angular/core';
import { Http,ResponseOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const CONTACT_URL = 'https://www.easy-mock.com/mock/591e4f439aba4141cf279a67/contact/';

@Injectable()
export class ContactService {

  constructor(
    private http:Http
  ) { }

  getContactsData(){
    return this.http.get(CONTACT_URL)
  }

  addContact(obj:Object={}){
    // post 请求
    let body = JSON.stringify(obj);
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(CONTACT_URL,body,{headers:headers})
  }

}
