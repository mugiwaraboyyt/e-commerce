import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _data: DataService,
    private router:Router
  ) { }
  id : string | null = '';
  product: any;
  ngOnInit(): void {
    // 1
    this.id = this.route.snapshot.paramMap.get('id')
    // 2
    this._data.getProductById(this.id).subscribe(
      res =>{
        this.product = res
      },
      err=>{
        console.log(err)
      }
    )
  }
  save(){
    this._data.updateProduct(this.id,this.product).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/admin'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
