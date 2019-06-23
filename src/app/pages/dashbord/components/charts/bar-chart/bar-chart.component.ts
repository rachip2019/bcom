
import { Component, OnInit ,Input } from '@angular/core';
import * as CanvasJS from '../../../../../../assets/js/canvasjs.js';
import {DashbordService} from '../../../../../shared/services/dashbord.service';

//import CanvasJS from 'canvasjs';



@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() call_distribution: any=[]; 
  @Input() departments: any=[];

  constructor(private _service : DashbordService) { }

  incoming_calls_point:any=[];
  outcoming_calls_point:any=[];

  ngOnInit() {
    this.initChart();
  }

  getDay(day:number):string{
      var arrDays = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
      return arrDays[day];
  }

  onChange(id){
    this._service.getCallDistribution(id).subscribe((data: {}) => {
      this.call_distribution = data;
      this.initChart();
    });
  }

  initChart(){
    this.incoming_calls_point = [];
    this.outcoming_calls_point = [];
    for (let index = 0; index < this.call_distribution['data'].length; index++) {
      this.incoming_calls_point.push({ y: this.call_distribution['data'][index]['incoming_calls'], label: this.getDay(this.call_distribution['data'][index]['day']) , color :'#635FCF' });
      this.outcoming_calls_point.push({ y: this.call_distribution['data'][index]['outcoming_calls'], label: this.getDay(this.call_distribution['data'][index]['day']) , color :'#00C7FF' });
    }
    let chart = new CanvasJS.Chart("barChartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "התפלגות שיחות במהלך השבוע האחרון",
        horizontalAlign: "right",
        fontFamily: "Rubik",
        fontSize: 20,
        fontWeight: "bold",
        padding: {
          top: 25,
          bottom: 25,
          right : -10,
        },

      },
      dataPointWidth: 15,
      axisY:{
        interval: 150,
        minimum:0,
        maximum:600,
        gridColor: '#EAF0F4',
        //intervalType: "hour",
        /*logarithmic: true,
        logarithmBase:  10,*/
      },
      legend: {
        /*verticalAlign: "top",
        horizontalAlign: "center",*/
      },
      data: [
        {
          type: "column",
          showInLegend: true, 
          legendText: "יוצאות",
          legendMarkerColor: "#635FCF",
          dataPoints: this.incoming_calls_point
        },
        {
          type: "column",
          showInLegend: true, 
          legendText: "נכנסות",
          legendMarkerColor: "#00C7FF",
          dataPoints: this.outcoming_calls_point
        }
    ]
    });
      
    chart.render();
  }

}
