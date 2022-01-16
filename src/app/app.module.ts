import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { ProductlistComponent } from './admin/product/productlist/productlist.component';
import { UserlistComponent } from './admin/user/userlist/userlist.component';
import { ArticlelistComponent } from './admin/article/articlelist/articlelist.component';
import { AddproductComponent } from './admin/product/addproduct/addproduct.component';
import { AddarticleComponent } from './admin/article/addarticle/addarticle.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { ProductdetailsComponent } from './admin/product/productdetails/productdetails.component';
import { ArticledetailsComponent } from './admin/article/articledetails/articledetails.component';
import { UserdetailsComponent } from './admin/user/userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    AddarticleComponent,
    AddproductComponent,
    AdduserComponent,
    ProductlistComponent,
    ArticlelistComponent,
    UserlistComponent,
    ProductdetailsComponent,
    ArticledetailsComponent,
    UserdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
