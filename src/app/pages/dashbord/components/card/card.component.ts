import { Component, OnInit  ,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string; 
  @Input() waiting_time_avg: string; 
  @Input() pending_number: number; 
  @Input() active_calls: number; 
  @Input() call_time_avg: string; 
  @Input() maximum_waiting_time: string; 

  constructor() { }

  ngOnInit() {
    var showTimes:Boolean=false;
  }

}
