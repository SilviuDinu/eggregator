import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialElevationDirective } from '../../data/directives/material-elevation-directive.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateFormatPipe } from '../../data/pipes/date-format.pipe';
import { TokenPipe } from '../../data/pipes/token.pipe';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [ArticleCardComponent, MaterialElevationDirective, DateFormatPipe, TokenPipe, CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  exports: [ArticleCardComponent, CardComponent]
})
export class BlogModule { }
