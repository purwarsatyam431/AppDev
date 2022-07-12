import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, takeUntil, timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AppForDev';
  ds:any;
 currentDate = new Date();
 startOfNextMinute = new Date(
  this.currentDate.getFullYear(),
  this.currentDate.getMonth(),
  this.currentDate.getDate(),
  this.currentDate.getHours(),
  this.currentDate.getMinutes() + 1
);
 
// This could be any observable stream
 source = interval(1000);
 
 result = this.source.pipe(
  takeUntil(timer(this.startOfNextMinute))
);
data:any

ngOnDestroy(): void {
  
}
isCollapsed: boolean = true;
toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
if(this.isCollapsed===true){
  this.isCollapsed=true
  this.data.unsubscribe()
}
else if(this.isCollapsed==!true){
  this.data= this.source.subscribe(d=>{
    this.ds=d
    this.isCollapsed=false
  })



}

}
reset(){
  this.isCollapsed = true;
  this.data.unsubscribe()
  this.ds=null
}
open(s:string){
this.rt.navigate([`/${s}`])
}
t1='iop'

constructor(public rt:Router){
}
}
