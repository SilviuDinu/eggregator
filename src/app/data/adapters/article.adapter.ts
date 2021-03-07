import { Adapter } from './adapter';
import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { DateFormatPipe } from '../pipes/date-format.pipe';
import moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class ArticleAdapter implements Adapter<Article> {

    constructor() { }

    adapt(item: any = {}): Article {
        return new Article(
            item.title,
            this.getArticleAuthor(item),
            moment(item.publishedAt).format('DD MMM YYYY'),
            item.urlToImage,
            item.description,
            item.content,
            item.url
        );
    }

    getArticleAuthor(item: any) {
        return item.author && !item.author.includes('http') ? item.author : item.source.name;
    }

}