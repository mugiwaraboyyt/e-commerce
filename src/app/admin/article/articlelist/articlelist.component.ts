import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from '../../../services/article-data.service'

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {

  constructor(private _data:ArticleDataService ) { }

  articles:any;
  deleteArticle(id:any){
    this._data.deleteArticle(id).subscribe(
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
    this._data.getAllArticles().subscribe(
      (res)=>{
        this.articles = res;
        console.log(this.articles);
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
