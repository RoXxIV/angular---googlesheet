import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SheetsService {

  constructor(private http: HttpClient) { }

  public getSheets(): Observable<any> {
    const sheetno = 'od6';
    const sheetid = '1tcIvXledcUE7vuymRm6aYrpR1cNyecR6CEWquo4Gzh4';
    const url = `https://spreadsheets.google.com/feeds/list/${sheetid}/${sheetno}/public/values?alt=json`;

    return this.http.get(url)
          .pipe(
            map((res: any) => {
              const data = res.feed.entry;
              const returnArray: Array<any> = [];
              if (data && data.length > 0) {
                data.forEach(entry => {
                  const obj = {};
                  for (const x in entry) {
                    if (x.includes('gsx$') && entry[x].$t) {
                      obj[x.split('$')[1]] = entry[x]['$t'];
                    }
                  }
                  returnArray.push(obj);
                });
              }
              return returnArray;
            })
          );
      }
}
