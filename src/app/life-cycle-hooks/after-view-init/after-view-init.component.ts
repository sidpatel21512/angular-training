import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-init',
  templateUrl: './after-view-init.component.html',
  styleUrls: ['./after-view-init.component.scss']
})
export class AfterViewInitComponent implements OnInit, AfterViewInit {

  @ViewChild('para') para!: ElementRef;
  constructor() {
    console.log('constructor:', this.para);
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.para);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:', this.para);
  }
}
