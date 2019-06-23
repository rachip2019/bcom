import { Component, OnInit , Input } from '@angular/core';
import * as CanvasJS from '../../../../../../assets/js/canvasjs.js';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';
import {DashbordService} from '../../../../../shared/services/dashbord.service';



@Component({ 
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() callData: any=[]; 

  constructor(private _service : DashbordService) { }

  sum:number= 0; 
  start_date:any={};
  end_date:any={};
  maxDate1:any={};
  maxDate2:any={};
  minDate1:any={};
  minDate2:any={};


  

  ngOnInit() {
    this.start_date = this.getModelDate(this.callData.start_date);
    this.end_date = this.getModelDate(this.callData.end_date);

    this.maxDate2 = {
      year:new Date().getFullYear(),
      month:new Date().getMonth()+1,
      day:new Date().getDate()
    };

    this.setEndDate(this.callData.start_date,this.callData.end_date);
    this.setStartDate(this.callData.start_date,this.callData.end_date);  
    
    this.initChart();

  }

  getModelDate(date:string):any{
    var obj = {
      year:new Date(date).getFullYear(),
      month:new Date(date).getMonth()+1,
      day:new Date(date).getDate()
    }
    return obj; 
  }

  dateChange(value1,value2,type){
      if(type=='start_change'){
        this.setEndDate(value1,value2);
      }
      else{
        this.setStartDate(value1,value2);
      }
      this._service.getCallData(value1,value2).subscribe((data: {}) => {
        this.callData = data;
        this.initChart();
      });
  }

  setEndDate(value1,value2){
    var minDate = new Date(value1);
    minDate.setDate(minDate.getDate() + 1);
    this.minDate2 = {
      year:new Date(minDate).getFullYear(),
      month:new Date(minDate).getMonth()+1,
      day:new Date(minDate).getDate()
    };
  }

  setStartDate(value1,value2){
    var prevDate = new Date(value2);
    prevDate.setDate(prevDate.getDate() - 1);
    this.maxDate1 = {
      year:new Date(prevDate).getFullYear(),
      month:new Date(prevDate).getMonth()+1,
      day:new Date(prevDate).getDate()
    };
  }

  initChart(){
    let chart = new CanvasJS.Chart("pieChartContainer", {
        animationEnabled: true,
        title:{
          text: "נתוני צריכה לשבוע האחרון",
          horizontalAlign: "right",
          fontFamily: "Rubik",
          fontSize: 20,
          fontWeight: "bold",
          padding: {
            top: 25,
            right: 25,
            bottom: 10,
            left: 0
          },
        },
        stripLines: [{
          labelPlacement: "inside",
          labelAlign: "near"
      }],
        data: [{
          type: "doughnut",
          startAngle: 60,
          //innerRadius: 60,
          indexLabelFontSize: 17,
          indexLabelPlacement: "outside",
          indexLabel: "{label} - #percent%",
          toolTipContent: "<b>{label}:</b> {y} (#percent%)",
          dataPoints: [
            { y: this.callData['incoming_calls'], label: "נכנסות", color:'#00C7FF' },
            { y: this.callData['outcoming_calls'], label: "יוצאות", color:'#15CB7C' },  
          ]
        }]
    });
      
    chart.render();

    var dps = chart.options.data[0].dataPoints;
        
    this.sum = 0;      
    for(var i = 0; i < dps.length; i++){
            
      this.sum += dps[i].y;                
            
    }
  }

}
