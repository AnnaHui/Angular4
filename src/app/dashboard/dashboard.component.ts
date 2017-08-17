import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input () loadState;
  @Output () loadStateChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onUserFinish(event) {
    // this.loadState = (<HTMLInputElement>event.target).value;
    // this.loadState = event.target.value;
    this.loadStateChange.emit(event.target.value);
  }

  onFinish() {
    this.loadState = 'finished';
  }


}

























// // loadState = 'loading';
//   @Input() loadState;

//   // data在兩個component間傳遞
//   @Output() loadStateChange = new EventEmitter<string>();


//   constructor() { }

//   ngOnInit() {
//   }

//   onUserFinish(event) {
//     // this.loadState = (<HTMLInputElement>event.target).value;
//     // this.loadState = event.target.value;
//     this.loadStateChange.emit(event.target.value);
//   }

//   onFinish() {
//     this.loadState = 'finished';
//   }
