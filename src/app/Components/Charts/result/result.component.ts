import { Component, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';

import { SheetsService } from '../../../Services/sheets.service';
import { CoolTheme } from './CoolTheme';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(private sheetHttp: SheetsService) { }
  resultList: [];
  theme: string | ThemeOption;
  coolTheme = CoolTheme;
  options: any;

  ngOnInit(): void {

    this.sheetHttp.getSheets()
    .subscribe(
      data => {
        this.resultList = data;
        this.options  = {
            title: {
              text: 'Resultats du vote',
              subtext: '😃',
              x: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              x: 'center',
              y: 'bottom',
              data: ['Javascript', 'Python', 'Php', 'Java', 'C#', 'Swift']
            },
            calculable: true,
            series: [
              {
                name: 'area',
                type: 'pie',
                radius: [30, 110],
                roseType: 'area',
                data: [
                  { value: this.resultList.filter(data => data['language'] == 'C#').length, name: 'C#' },
                  { value: this.resultList.filter(data => data['language'] == 'Python').length, name: 'Python' },
                  { value: this.resultList.filter(data => data['language'] == 'Javascript').length, name: 'Javascript' },
                  { value: this.resultList.filter(data => data['language'] == 'Java').length, name: 'Java' },
                  { value: this.resultList.filter(data => data['language'] == 'Php').length, name: 'Php' },
                  { value: this.resultList.filter(data => data['language'] == 'Swift').length, name: 'Swift' },
                ]
              }
            ]
          };
      }
    );

  }

}
