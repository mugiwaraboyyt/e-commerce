import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleDataService } from 'src/app/services/article-data.service';

@Component({
  selector: 'app-articledetails',
  templateUrl: './articledetails.component.html',
  styleUrls: ['./articledetails.component.css']
})
export class ArticledetailsComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private _data: ArticleDataService,
    private router:Router
  ) { }
  id : string | null = '';
  article: any;
  ngOnInit(): void {
    // 1
    this.id = this.route.snapshot.paramMap.get('id')
    // 2
    this._data.getArticleById(this.id).subscribe(
      res =>{
        this.article = res
      },
      err=>{
        console.log(err)
      }
    )
  }
  save(){
    this._data.updateArticle(this.id,this.article).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/admin/articlelist'])
      },
      err=>{
        console.log(err)
      }
    )
  }

}
