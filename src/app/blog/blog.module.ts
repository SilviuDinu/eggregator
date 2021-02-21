import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MaterialElevationDirective } from './directives/material-elevation-directive.directive';


@NgModule({
  declarations: [ArticleCardComponent, MaterialElevationDirective],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [ArticleCardComponent]
})
export class BlogModule { }
