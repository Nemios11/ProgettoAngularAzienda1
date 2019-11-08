import { Component, OnInit } from '@angular/core';
import { FirstClass } from '../first-class';
import { FormBuilder } from '@angular/forms';
import { MyServiceService } from '../my-service.service';






@Component({
  selector: 'app-component-form',
  templateUrl: './component-form.component.html',
  styleUrls: ['./component-form.component.css']
})
export class ComponentFormComponent implements OnInit {

  detailMaxLength: number = 100;

  Dati = new FirstClass; // dati inseriti
  myForm = this.fb.group({
    description:[""],
    detail:[""],
    datetime:["", [(val:any) => {return this.validateDatelocal(val.value)}]],
    price:[""],
    worker:["", [(val:any) => {return this.validateWorker(val.value)}]]  //val.value sarebbe il valore della stringa(la data che compare nell'input box)



  })

  constructor(private fb: FormBuilder, private ms: MyServiceService) { 
     
  }

  validateDatelocal(valueDatalocal: string){
    var datetoday: any = new Date();
    var dateinput: any = new Date(valueDatalocal) ;

    if (dateinput >= datetoday){
      return null;

    } else { 
        return {
          'error': "Assegna una data valida!"
      }    
    }   

  }

  validateWorker(valueWorker: string){
    var i: number;
      for (i = 0; i < this.ms.getResults().length; i++){
        if (this.ms.getResults()[i][0] == valueWorker){
          this.Dati.worker_id = this.ms.getResults()[i][1];
          return null 
        }
      }
      
          return {
            'error': "Devi assegnare un manutentore!"
    
          }
  }

  ngOnInit() {
   
  }

  onSubmit() {

    this.ms.sendResults(this.Dati);
  }

  onInput_Price(priceRef: any)
  {
    if (!isNaN(priceRef.value) && (priceRef.value.length > 1)) {
      if (priceRef.value < 0)
      {
        priceRef.value = Math.ceil(priceRef.value*100)/100;
      } else
      {
        priceRef.value = Math.floor(priceRef.value*100)/100;
      }
    } 
  }


}
