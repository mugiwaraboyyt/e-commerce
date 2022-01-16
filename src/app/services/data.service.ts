import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  private endpoint = "http://localhost:3000/";

  addproduct(product:any){
    return this.httpClient.post(this.endpoint+'product/ajout',product);
  }
  getAllProducts(){
    return this.httpClient.get(this.endpoint + 'product/getall');
  }
  deleteProduct(id:any){
    return this.httpClient.delete(this.endpoint + 'product/delete/' + id);
  }
  getProductById(id:any){
    return this.httpClient.get(this.endpoint + 'product/getbyid/' + id)
  }
  updateProduct(id:any,product:any){
    return this.httpClient.put(this.endpoint +'product/update/'+ id, product)
  }
}
