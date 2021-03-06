import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

@Input() title: string;
@Input() subTitle: string;
@Input() image: string;
@Input() body: string;
@Input() description: string;
@Input() defaultElevation = 2;
@Input() raisedElevation = 8;

}
