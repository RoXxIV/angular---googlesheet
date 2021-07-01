import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SheetsService } from '../../Services/sheets.service';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {
  constructor(private sheetHttp: SheetsService) { }
  // all data
  sheetList = [];
  // table related
  collectionSize: number;
  pageSize = 8;
  currentPage = 1;


    ngOnInit(): void {

      this.sheetHttp.getSheets()
      .subscribe(
        data => {
          this.sheetList = data;
          this.collectionSize = this.sheetList.length;
        }
      );

  }
}




