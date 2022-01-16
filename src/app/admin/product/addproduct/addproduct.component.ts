import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private _data:DataService) { }
  product = {
    title:'',
    description:'',
    price:'',
    image:'',
  }
  add(){
    this._data.addproduct(this.product).subscribe(
      (response)=>{
        console.log(response);
        this.product = {
          title:'',
          description:'',
          price:'',
          image:'',
        }
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }


}
