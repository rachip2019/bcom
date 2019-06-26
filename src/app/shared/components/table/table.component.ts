import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @Input() tableColumns: Array<string> = [];
  @Input() tableData: Array<any> = [];
  @Input() title: string;
  @Input() createBtn: string;

  pageSize = 10;
  pageNumber = 1;

  constructor() { }

  ngOnInit() {
    //this.loadData();
  }
  /*loadData() {
    this.tableData = this._tablesDataService.DATA;
    this.tableColumns = this._tablesDataService.COLUMNS;
  }*/

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
