import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(
    private _data:UserDataService,
    private router : Router
    ) { }
  user = {
    firstname:'',
    lastname:'',
    age:'',
    address:'',
  }
  add(){
    this._data.addUser(this.user).subscribe(
      (res)=>{
        console.log(res);
        this.user = {
          firstname:'',
          lastname:'',
          age:'',
          address:'',
        }
        this.router.navigate(['/admin/userlist']);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }
}
