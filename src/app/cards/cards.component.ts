import { Component, OnInit } from '@angular/core';
import {MatProgressBar} from '@angular/material/progress-bar';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public isProgressBarHidden = true;
  public progressBarValue = 10;
  public maxProgressBarValue = 100;
  public cards: {title: string; content: string}[] = [
    {title: 'my title of my product 1', content: 'this is description of famous product 1'},
    {title: 'my title of my product 2', content: 'this is description of famous product 2'},
    {title: 'my title of my product 3', content: 'this is description of famous product 3'},
    {title: 'my title of my product 4', content: 'this is description of famous product 4'},
  ];

  constructor() {
    // setInterval(() => {
    //   this.progressBarValue = Math.random() * this.maxProgressBarValue;
    // }, 500);

    // setTimeout(() => {this.isProgressBarHidden = false; }, 3000);
  }

  // public isProgressBarVisible(): boolean {
  //   return !this.isProgressBarHidden;
  // }

  public makeMeBeTomato(e): void {
    console.log(e);
  }
}
