import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works!
    </p>
  `,
  styles: []
})
export class SquareComponent implements OnInit {
  clicked = false

  constructor() { }

  ngOnInit(): void {
  }

}