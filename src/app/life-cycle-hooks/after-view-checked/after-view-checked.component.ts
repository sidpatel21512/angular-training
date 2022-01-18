import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-view-checked',
  templateUrl: './after-view-checked.component.html',
  styleUrls: ['./after-view-checked.component.scss']
})
export class AfterViewCheckedComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('check') check!: ElementRef;

  public isChecked = false;
  constructor() {
    console.log('constructor:', this.check);
    setTimeout(() => {
      this.isChecked = true;
    }, 15000);
  }

  ngOnInit(): void {
    console.log('ngOnInit:', this.check);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit:', this.check);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked:', this.check);
  }

}
