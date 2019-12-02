import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  apiUrl = 'https://reqres.in';
  constructor(private http :HttpClient) { }


  }
