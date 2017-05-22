import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Routes } from './app.router';
import { AppComponent } from './app.component';
import { CommonHeaderComponent } from './share/common-header/common-header.component';
import { CommonFooterComponent } from './share/common-footer/common-footer.component';
import { CollectionComponent } from './collection/collection.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { BtnClickDirective } from './share/directive/btn-click.directive';
import { PhonePipe } from './share/pipe/phone.pipe';

import { ContactService } from './share/service/contact.service';
import { UtilService } from './share/service/util.service';
import { ListItemComponent } from './list/list-item/list-item.component';
@NgModule({
  declarations: [
    AppComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    CollectionComponent,
    ListComponent,
    EditComponent,
    DetailComponent,
    BtnClickDirective,
    PhonePipe,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [ContactService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
