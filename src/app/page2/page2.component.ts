import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Page3Component } from '../page3/page3.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component extends Page3Component implements OnInit {

  constructor(rt:Router) { 
    super(rt)
  }

}
