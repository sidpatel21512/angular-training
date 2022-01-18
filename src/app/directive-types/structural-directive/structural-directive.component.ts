import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  public isLoading = false;
  public obj: any = undefined;
  public elements = ['first', 'second', 'third'];
  constructor() { }

  ngOnInit(): void {
  }

}
