import { Component, OnInit } from '@angular/core';
import { articles } from '../articles';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {

  constructor(
    private articleService: ArticlesService
  ) { }

  defaultElevation = 2;
  raisedElevation = 8;

  public articles: object = null;

  ngOnInit(): void {
    this.setArticles();
  }

  public setArticles() {
    this.articles = articles;
  }

  goToArticle(url): void {
    window.open(url, '_blank');
  }

}
