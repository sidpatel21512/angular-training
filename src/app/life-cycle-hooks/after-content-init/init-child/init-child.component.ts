import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-init-child',
  templateUrl: './init-child.component.html',
  styleUrls: ['./init-child.component.scss']
})
export class InitChildComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild("firstcontent", { read: ElementRef }) fRef!: ElementRef;
  @ContentChild("seccontent", { read: ElementRef }) sRef!: ElementRef;

  constructor() {
    console.log('constructor:');
  }

  ngOnInit(): void {
    console.log('ngOnInit:');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit:');
    console.log('fRef:', this.fRef);
    console.log('sRef:', this.sRef);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked:');
    console.log('fRef:', this.fRef);
    console.log('sRef:', this.sRef);
  }
}
