import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IasGeneratorService {

  iasGeneratorServiceUrl = 'http://localhost:8080/api/component/generate';

  constructor(private http: HttpClient) { }

  public getToGenerateComponent() {
    return this.http.get(this.iasGeneratorServiceUrl)
  }


}
