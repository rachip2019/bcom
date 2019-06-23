import { Component, OnInit } from '@angular/core';
import { TablesDataService } from './tablesData.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TablesDataService]
})
export class TableComponent implements OnInit {

  tableColumns: Array<string>;

  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _tablesDataService: TablesDataService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.tableData = this._tablesDataService.DATA;
    this.tableColumns = this._tablesDataService.COLUMNS;
    console.log(this.tableData[0]);
    /*for (let index = 0; index < this.tableColumns[0]; index++) {
      
      
    }*/
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
