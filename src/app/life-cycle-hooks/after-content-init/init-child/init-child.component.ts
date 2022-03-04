import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-child',
  templateUrl: './init-child.component.html',
  styleUrls: ['./init-child.component.scss']
})
export class InitChildComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor() {
    console.log('constructor:');
  }

  ngOnInit(): void {
    console.log('ngOnInit:');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit:');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked:');
  }
}
