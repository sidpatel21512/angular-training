import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-after-content-init',
  templateUrl: './after-content-init.component.html',
  styleUrls: ['./after-content-init.component.scss']
})
export class AfterContentInitComponent implements OnInit {
  isVisible = false;
  constructor() {
    setTimeout(() => {
      this.isVisible = true;
    }, 5000);
   }

  ngOnInit(): void {
  }

}
