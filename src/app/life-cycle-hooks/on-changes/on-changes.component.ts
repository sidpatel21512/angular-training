import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnInit, OnChanges {

  public name: string;
  constructor() {
    this.name = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('c:', changes);
  }

  ngOnInit(): void {
  }
}
