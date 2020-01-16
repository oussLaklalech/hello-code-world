import { Injectable } from '@angular/core';
import { ARTICLE1, ARTICLE2 } from '../mock-files/articles-mock';
import { Article } from '../classes/article';
import { Section } from '../classes/section';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  /**
   * Get Article By Id.
   * 
   * @param i 
   */
  getArticle(id: number): Observable<Article> {

    if (id == 1) {
      return of(ARTICLE1);
    }
    return of(ARTICLE2);
  }
}
