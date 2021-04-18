import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// EventEmitter, Output for child to parent communication
@Component({
  selector: 'app-search-bar', 
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();
  term = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onFormSubmit(event: any){
    event.preventDefault();//to stop the browser's default behaviour
    // => stop the browser from doing the form submission
    this.submitted.emit(this.term);
    
  }
}
