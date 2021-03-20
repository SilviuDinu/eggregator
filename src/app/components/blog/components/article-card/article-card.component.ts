import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '@data/services/articles.service';


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

  public articles = [];

  ngOnInit(): void {
    this.articleService.getArticles(
      'ALL ARTICLES',
      {}
    )
      .subscribe((articles) => {
        console.log(articles);
        this.articles = articles;
      }, err => {
        throw new Error(err);
      });
  }


  goToArticle(url): void {
    window.open(url, '_blank');
  }

}
