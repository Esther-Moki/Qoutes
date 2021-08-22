import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Esther Moki', 'Courage', 'Martin Luther King Jr', 'Our lives begin to end the day we become silent about things that matter', new Date(2021, 7, 21)),
    new Quote('Scholastica Kinanu', 'Life', 'Malcom x', 'If you have no critics,you will likely have no success', new Date(2021, 7, 21)),
    new Quote('Lucy Ngugi', 'Forgiveness', 'Martin Luther King Jr', 'Forgiveness is not an occasional act,it is a constant attitude', new Date(2021, 7, 21)),
    new Quote('Chris Brown', 'Struggles', 'Esther Mwende Moki', 'There is no better than adversity.Every defeat, every heartbreak,every loss contains its on seed,its own lesson on how to improve your performance next time', new Date(2021, 7, 21)),
    new Quote('Jordin Sparks', 'Love', 'John Doe', 'I imagine one of the reasons people cling to their hates so stubbornly is because they sense once hate is gone they will be forced to deal with pain', new Date(2021, 7, 21)),


  ];

  constructor() { }

  ngOnInit(): void {
  }
  addQuotes(quote: any) {
    return (`${this.quotes.push(quote)}`);
  }

}
