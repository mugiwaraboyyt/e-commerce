import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private httpClient: HttpClient) { }
  private endpoint = "http://localhost:3000/";

  addArticle(article:any){
    return this.httpClient.post(this.endpoint+'article/ajout',article);
  }
  getAllArticles(){
    return this.httpClient.get(this.endpoint + 'article/getall');
  }
  deleteArticle(id:any){
    return this.httpClient.delete(this.endpoint + 'article/delete/' + id);
  }
  getArticleById(id:any){
    return this.httpClient.get(this.endpoint + 'article/getbyid/' + id)
  }
  updateArticle(id:any,article:any){
    return this.httpClient.put(this.endpoint +'article/update/'+ id, article)
  }
}
