import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //declare variables here
  result:number=0
  final:any
  title = 'Temperature Converter';
  convert(temp : number,type : string){
     console.log(typeof(temp)); //delete later
     console.log(temp); //delete later
     console.log(typeof(type)); //delete later
     console.log(type); //delete later
     if (type=="f") {
       this.result=((temp-32)*5)/9
       this.final=(this.result.toFixed(2)+" °C")
       console.log(this.final)
      } else {
        this.result=temp*(9/5)+32
        // console.log(this.result.toFixed(2)+" F")
        this.final=(this.result.toFixed(2)+" °F")
        console.log(this.final)
     }
  }

}
