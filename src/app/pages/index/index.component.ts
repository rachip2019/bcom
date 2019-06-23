import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import * as CanvasJS from '../../../assets/js/canvasjs.js'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title:{
        text: "Email Categories",
        horizontalAlign: "left"
      },
      data: [{
        type: "doughnut",
        startAngle: 60,
        //innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabelPlacement: "outside",
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 67, label: "Inbox" }, 
          { y: 28, label: "Archives" },
          { y: 10, label: "Labels" },
          { y: 7, label: "Drafts"},
          { y: 15, label: "Trash"},
          { y: 6, label: "Spam"}
        ]
      }]
  });
    
  chart.render();
  }
}
