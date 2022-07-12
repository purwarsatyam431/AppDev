import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component extends AppComponent implements OnInit {

  constructor(rt:Router) { 
    super(rt)
  }
  arr1:any=["Satyam",['qw','212']]
arr2:any=["Purwar"]
arr3:any=[];

arr0:any=[];
fruits = ["Banana", "Orange", "Apple", "Mango","kiwi","watermelon"];
copy:any;
f:any;
x:any=[]
g:any;
ages=[19,34,54,25,19,22,25]
age:any
 d = { 0: 'a', 1: 'b', 2: 'c' };
 ngOnInit(): void {
this.t1="pahe123"
this.arr0=this.arr3.concat(this.arr1,this.arr2)
this.copy=this.fruits.copyWithin(3,0)
this.f = this.fruits.entries();
this.x =Object.entries(this.fruits)
console.log(Object.entries(this.d)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] 
this.g=this.fruits.fill("kiwi", 2, 5)
  }
 
  funEvery(){
this.age= this.ages.every(checkage)
function checkage(ag:number){
return ag > 18;
}

  }

  filFun(){
    this.age=this.ages.filter(age)
    function age(a:number){
      return a<=22

    }
  }
student=[12,34,53,13,56]
a:any;
  FunIndex(){
    this.a=this.student.findIndex(age)
    function age(a:any){
      return a>=54

    }
  }

sat=["sat","pur","sdfg","saty"]
text:any=[];
s:any
Funeach(){
    this.sat.forEach(myFunction)
   function myFunction(s:any) {
   console.log(s)
        }
      

  }
  }
