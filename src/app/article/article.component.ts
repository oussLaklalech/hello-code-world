import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../classes/article';
import { ArticleService } from './article.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = new Article();

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {

  }

  ngOnInit() {
    //var idArticle = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params => {
      var idArticle = +params['id']; // (+) converts string 'id' to a number

      this.getArticle(+idArticle);
    });
  }

  getArticle(id: number): void {
    this.articleService.getArticle(id).subscribe(article => this.article = article);
  }
}
