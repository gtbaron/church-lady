import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input()
  name: string;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    console.log(this.name);
    alert(this.name);
  }

}
