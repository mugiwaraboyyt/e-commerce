import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddarticleComponent } from './admin/article/addarticle/addarticle.component';
import { ArticledetailsComponent } from './admin/article/articledetails/articledetails.component';
import { ArticlelistComponent } from './admin/article/articlelist/articlelist.component';
import { AddproductComponent } from './admin/product/addproduct/addproduct.component';
import { ProductdetailsComponent } from './admin/product/productdetails/productdetails.component';
import { ProductlistComponent } from './admin/product/productlist/productlist.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { UserdetailsComponent } from './admin/user/userdetails/userdetails.component';
import { UserlistComponent } from './admin/user/userlist/userlist.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  { path: '', component: ClientComponent, children:[]},
  { path: 'admin', component: AdminComponent, children:[

    // products
    {path:'addproduct', component : AddproductComponent},
    {path:'productdetails/:id', component : ProductdetailsComponent},
    {path:'', component : ProductlistComponent},
    // articles
    {path:'addarticle', component : AddarticleComponent},
    {path:'articledetails/:id', component: ArticledetailsComponent},
    {path : 'articlelist', component: ArticlelistComponent},
    // users
    {path:'adduser', component : AdduserComponent},
    {path:'userdetails/:id',component:UserdetailsComponent},
    {path:'userlist', component: UserlistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
