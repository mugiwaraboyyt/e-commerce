import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private _data: DataService) { }

  products:any;
  deleteProduct(id:any){
    this._data.deleteProduct(id).subscribe(
      (res)=>{
        console.log(res);
        this.ngOnInit();
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this._data.getAllProducts().subscribe(
      (res)=>{
        this.products = res;
        console.log(this.products);

      },
      (err)=>{
        console.log(err);

      }
    );
  }

}
