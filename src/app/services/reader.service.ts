import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  url: any = 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice';
  constructor(private http: HttpClient) {
  }

  getFullList(metric, location) {
    return this.http.get(this.url + '/' + metric + '-' + location + '.json');
  }
}
