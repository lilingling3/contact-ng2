import { CollectionComponent } from './collection/collection.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

export const Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  },
  {
    path :'list',
    component:ListComponent
  },
  {
    path :'list/:id',
    component:DetailComponent
  },
  {
    path :'edit',
    component:EditComponent
  },
  {
    path :'edit/:id',
    component:EditComponent
  },
  {
    path :'collection',
    component:CollectionComponent
  },
];
