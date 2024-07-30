import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Pipe/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "This is a demo session";
  lastName : string = "FRAMEWORK "

  currentTime: Observable<Date> = new Observable <Date>;

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=> new Date()));
  }

  currentDate: Date = new Date();
  //currencyPipe
  //DecimalPipe
  //percentpipe
  //AsyncPipe
  //JsonPipe

  student: any = {
    name:'Sangram',
    city:'Kolhapur',
    empId:'05',
    state:''
  }
}
