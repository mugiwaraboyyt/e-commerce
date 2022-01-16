import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _data: UserDataService,
    private router:Router
  ) { }
  id : string | null = '';
  user: any;
  ngOnInit(): void {
    // 1
    this.id = this.route.snapshot.paramMap.get('id')
    // 2
    this._data.getUserById(this.id).subscribe(
      res =>{
        this.user = res
      },
      err=>{
        console.log(err)
      }
    )
  }
  save(){
    this._data.updateUser(this.id,this.user).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/admin/userlist'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
