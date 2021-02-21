import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  defaultElevation = 2;
  raisedElevation = 8;

  public articles: object = null;

  ngOnInit(): void {
    this.setArticles();
  }

  public setArticles() {
    this.articles = articles;
  }

  goToArticle(url) {
    window.open(url, '_blank');
  }

}
