import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input () items = [];
  @Output () itemsChange = new EventEmitter<string>();
  itemsAdd = '';



  constructor() { }

  ngOnInit() {
  }


  addItems(event) {
    // console.log(this.items);
    this.itemsChange.emit(this.itemsAdd);
  }

}
