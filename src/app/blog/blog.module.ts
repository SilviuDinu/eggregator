import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialElevationDirective } from './directives/material-elevation-directive.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TokenPipe } from './pipes/token.pipe';


@NgModule({
  declarations: [ArticleCardComponent, MaterialElevationDirective, DateFormatPipe, TokenPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [ArticleCardComponent]
})
export class BlogModule { }
