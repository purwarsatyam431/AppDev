import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component extends AppComponent implements OnInit {

  constructor(rt:Router) { 
    super(rt)
  } 
ngOnInit(): void {
  
}
}
