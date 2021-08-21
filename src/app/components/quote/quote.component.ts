import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote [] = [
    {id:1, name:'Martin Luther King Jr',description:'Find an online version and watch merlin find his son'},
    {id:2,name:'Buy Cookies',description:'I have to buy cookies for the parrot'},
    {id:3,name:'Get new Phone Case',description:'Diana has her birthday coming up soon'},
    {id:4,name:'Get Dog Food',description:'Pupper likes expensive sancks'},
    {id:5,name:'Solve math homework',description:'Damn Math'},
    {id:6,name:'Plot my world domination plan',description:'Cause I am an evil overlord'},
    // new Quote(1,  'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    // new Quote(2, 'Buy Cookies','I have to buy cookies for the parrot'),
    // new Quote(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    // new Quote(4,'Get Dog Food','Pupper likes expensive snacks'),
    // new Quote(5,'Solve math homework','Damn Math'),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
