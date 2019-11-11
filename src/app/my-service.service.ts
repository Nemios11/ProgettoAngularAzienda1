import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  results: any[];
  private apiUrl = 'https://reqres.in/api/users?per_page=100';
  private apiUrlpost = 'https://reqres.in/api/users';
    
  


  constructor(private httpClient: HttpClient) {    
  }

  fakeApi(){
    const httpOption  = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : 'my-auth-token'
      })
    }
      return httpOption;
  }

  sendDates(dates: any){
    var obs = this.httpClient.post(this.apiUrlpost, dates)
    obs.subscribe((res: any)=>{console.log(res)})

  }



  getResults() {
    if ((this.results == null) || (this.results == undefined)) {
      this.results = [];
      this.httpClient.get<string[]>(
        this.apiUrl,
        this.fakeApi()             
      ).subscribe(
        (res: any) => {
          console.log(res);
          for (var i = 0; i < res.data.length; i++)
          {
            this.results.push([res.data[i].last_name + ', ' + res.data[i].first_name, res.data[i].id]);
          }
        }, 
        err => {
          console.log(err);
        }
      )
    }
    return this.results;
  }

  

  


}
