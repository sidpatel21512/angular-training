import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  private isFirst = false;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // Relative route example
  goToOtherRoute() {
    const path = this.isFirst ? 'child-a' : 'child-b';
    this.isFirst = !this.isFirst;
    this.router.navigate([path], {relativeTo: this.route});
  }

}
