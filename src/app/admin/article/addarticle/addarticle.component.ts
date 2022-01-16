import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleDataService } from 'src/app/services/article-data.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {

  constructor(
    private _data:ArticleDataService,
    private router : Router
    ) { }
  article = {
    title:'',
    content:'',
    like:'',
    photo:'',
  }
  add(){
    this._data.addArticle(this.article).subscribe(
      (response)=>{
        console.log(response);
        this.article = {
          title:'',
          content:'',
          like:'',
          photo:'',
        }
        this.router.navigate(['/admin/articlelist']);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }
}
