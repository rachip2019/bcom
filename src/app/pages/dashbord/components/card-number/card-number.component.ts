import { Component, OnInit , Input } from '@angular/core';
//import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'app-card-number',
  templateUrl: './card-number.component.html',
  styleUrls: ['./card-number.component.scss']
})
export class CardNumberComponent implements OnInit {

  @Input() color: string; 
  @Input() icon: string;  
  @Input() data: string;  
  @Input() title: string;  

  constructor() { }

  ngOnInit() {
  }

}
