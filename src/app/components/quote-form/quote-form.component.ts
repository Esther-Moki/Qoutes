import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../../quote';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() onAddQuote : EventEmitter<Quote> = new EventEmitter();
 
  newQuote = new Quote("","","","",new Date());
  
  
  // day:string;
  // description:string;



  constructor() { }

  ngOnInit(): void {
  }

  submitQuote(){
    const newQuotes ={
      submitted:this.newQuote.submitted,
      day:this.newQuote.day,
      description:this.newQuote.description,
      quoteTittle: this.newQuote.quoteTittle,
      name:this.newQuote.name,
      // date:new Date()
      
    }
    
    this.onAddQuote.emit(newQuotes)

    this.newQuote.submitted = '';
    this.newQuote.day =;
    this.newQuote.description = '';
    this.newQuote.quoteTittle = '';
    this.newQuote.name = '';
 
  }

}
