import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }
  private endpoint = "http://localhost:3000/";

  addUser(user:any){
    return this.httpClient.post(this.endpoint+'user/ajout',user);
  }
  getAllUsers(){
    return this.httpClient.get(this.endpoint + 'user/getall');
  }
  deleteUser(id:any){
    return this.httpClient.delete(this.endpoint + 'user/delete/' + id);
  }
  getUserById(id:any){
    return this.httpClient.get(this.endpoint + 'user/getbyid/' + id)
  }
  updateUser(id:any,user:any){
    return this.httpClient.put(this.endpoint +'article/update/'+ id, user)
  }
}
