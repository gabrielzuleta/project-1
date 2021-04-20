import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  title = 'e-store';

  items = ['gabriel', 'julia', 'andrea'];

  objeto = {};

  power = 10;

  ngOnInit() {
    // code
  }

  // tslint:disable-next-line: typedef
  addItem() {
    this.items.push('new item');
  }

  // tslint:disable-next-line: typedef
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
