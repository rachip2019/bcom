import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { TabMenuModel } from '../../../models/tabs-model';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @Input()
  for: string;

  @Input()
  tabTitle: string = 'tab title';

  @Input()
  active: boolean = false;

  @Input()
<<<<<<< HEAD
  done: boolean = false;

  @Input()
=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
  disabled: boolean = false;

  tabsMenu: TabMenuModel;

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._tabsTitle();

    /* this._globalService.tabsOrder$.subscribe(tabsOrder => {
      if (this.for === tabsOrder[0]) {
        this.active = false;
        if (this.tabTitle === tabsOrder[1]) {
          this.active = true;
        }
      }
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'tabsOrder' && this.for === data.value[0]) {
        this.active = false;
        if (this.tabTitle === data.value[1]) {
          this.active = true;
        }
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  _tabsTitle() {
    this.tabsMenu = {
      for: this.for,
      text: this.tabTitle,
      active: this.active,
<<<<<<< HEAD
      done: this.done,
=======
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
      disabled: this.disabled
    }
    //this._globalService._tabsMenu(this.tabsMenu);
    this._globalService.dataBusChanged('tabsMenu', this.tabsMenu);

  }
}
