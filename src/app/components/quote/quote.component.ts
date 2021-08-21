import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    { id: 1, submitted: 'Esther Moki',quoteTittle:'Courage', name: 'Martin Luther King Jr', description: 'Our lives begin to end the day we become silent about things that matter' },
    { id: 2, submitted: 'Scholastica Kinanu', quoteTittle:'Life',name: 'Malcom x', description: 'If you have no critics,you will likely have no success' },
    { id: 3, submitted: 'Lucy Ngugi', quoteTittle:'Forgiveness', name: 'Martin Luther King Jr', description: 'Forgiveness is not an occasional act,it is a constant attitude' },
    { id: 4, submitted: 'Chris Brown', quoteTittle:'Struggles', name: 'Esther Mwende Moki', description: 'There is no better than adversity.Every defeat, every heartbreak,every loss contains its own seed,its own lesson on how to improve your performance next time' },
    { id: 5,submitted: 'Jordin Sparks', quoteTittle:'Love', name: 'John Doe', description: 'I imagine one of the reasons people cling to their hates so stubbornly is because they sense once hate is gone they will be forced to deal with pain' },
  
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
