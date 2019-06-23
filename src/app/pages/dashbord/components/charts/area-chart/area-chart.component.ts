import { Component, OnInit , Input } from '@angular/core';
import * as CanvasJS from '../../../../../../assets/js/canvasjs.js';
import {DashbordService} from '../../../../../shared/services/dashbord.service';

@Component({
  selector: 'areaChart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {

  @Input() pending_avg: any=[]; 
  @Input() departments: any=[];

  constructor(private _service : DashbordService) { }

  ngOnInit() {
    this.initChart();  
  }

  onChange(id){
    this._service.getPendingAvg(id).subscribe((data: {}) => {
      this.pending_avg = data;
      this.initChart();
    });
  }

  initChart(){
    var pending_avg_points:any=[];
    for (let index = 0; index < this.pending_avg.data.length; index++) {
      pending_avg_points.push({label: this.pending_avg['data'][index]['hour'], y: this.pending_avg['data'][index]['pending_avg'],color:'#635FCF'});
    }
    
    var chart = new CanvasJS.Chart("areaChartContainer",
      {
        title:{
          text: "ממוצע ממתינים לפי שעה",
          horizontalAlign: "right",
          fontFamily: "Rubik",
          fontSize: 20,
          fontWeight: "bold",
          padding: {
            top: 25,
            right: 0,
            bottom: 25,
            left: 0
          },
        },    
        axisY:{
          interval: 5,
          minimum:0,
          maximum:30,
          gridColor: '#EAF0F4',
          //intervalType: "hour",
          /*logarithmic: true,
          logarithmBase:  10,*/
        },		
        axisX:{
          margin: 25,
        },
        data: [
        {        
          type: "splineArea",
          color: "#635FCF",
          fillOpacity: .3, 
          dataPoints: pending_avg_points
        }             
        ]
      });

    chart.render();
  }

}
