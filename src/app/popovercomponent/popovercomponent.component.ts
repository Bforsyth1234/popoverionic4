import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popovercomponent',
  templateUrl: './popovercomponent.component.html',
  styleUrls: ['./popovercomponent.component.scss'],
})
export class PopovercomponentComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
    console.log('this.data = ');
    console.log(this.data);
  }

}
