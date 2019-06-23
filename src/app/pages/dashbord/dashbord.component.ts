import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.js';
import {DashbordService} from '../../shared/services/dashbord.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  public dashbordData:any=[];
  public departments:any=[];

  constructor(private _service : DashbordService) { 
    
  }

  ngOnInit() {

    this._service.getData().subscribe((data: {}) => {
      this.dashbordData=data;
      this.departments = this.dashbordData['departments'];
    });
  }

  // public chartType: string = 'doughnut';

  // public chartDatasets: Array<any> = [
  //   { data: [300, 50], label: 'My First dataset' }
  // ];

  // public chartLabels: Array<any> = ['שיחות נכנסות', 'שיחות יוצאות'];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: ['#15CB7C', '#00C7FF'],
  //     hoverBackgroundColor: ['#15CB7C', '#00C7FF'],
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true
  // };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }

  // public chartType1: string = 'line';

  // public chartDatasets1: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  // ];

  // public chartLabels1: Array<any> = ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

  // public chartColors1: Array<any> = [
  //   {
  //     backgroundColor: '#635fcf69',
  //     borderColor: '#635FCF',
  //     borderWidth: 2,
  //   },
  // ];

  // public chartOptions1: any = {
  //   responsive: true
  // };
  // public chartClicked1(e: any): void { }
  // public chartHovered1(e: any): void { }

}
