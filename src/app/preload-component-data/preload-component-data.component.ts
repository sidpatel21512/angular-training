import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preload-component-data',
  templateUrl: './preload-component-data.component.html',
  styleUrls: ['./preload-component-data.component.scss']
})
export class PreloadComponentDataComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('snapshot:',this.route.snapshot.data);
    this.route.data
      .subscribe((data: any) => {
        console.log(data.componentData);
      });
  }

}
