import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  constructor(private _data:UserDataService ) { }

  users:any;
  deleteUser(id:any){
    this._data.deleteUser(id).subscribe(
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
    this._data.getAllUsers().subscribe(
      (res)=>{
        this.users = res;
        console.log(this.users);

      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
