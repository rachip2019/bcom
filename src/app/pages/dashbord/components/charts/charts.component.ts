import { Component } from '@angular/core';
import { ChartsService } from './charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  providers: [ChartsService]
})
export class ChartsComponent {
  showloading: boolean = false;
  BarOption;
  LineOption;
  PieOption;
  AnimationBarOption;

  constructor(private chartsService: ChartsService) {
    this.BarOption = this.chartsService.getBarOption();
    this.LineOption = this.chartsService.getLineOption();
    this.PieOption = this.chartsService.getPieOption();
    this.AnimationBarOption = this.chartsService.getAnimationBarOption();
  }
}
