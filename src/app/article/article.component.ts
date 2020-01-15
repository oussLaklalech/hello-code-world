import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../classes/article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.getArticle(2);
  }

  getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }
}
