import { Component, OnInit } from '@angular/core';
import { Article } from '../classes/article';
import { Section } from '../classes/section';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  article: Article = {
    id: 1,
    title: 'JAVA 8',
    resume: 'This is a short description of Java 8',
    sections: [
      new Section(1, "Introduction", "introduction of java 8"),
      new Section(2, "What's new", "We will describe all the features of the java 8"),
      new Section(3, "Conclusion", "Conclusion of java 8")
    ]
  };
}
