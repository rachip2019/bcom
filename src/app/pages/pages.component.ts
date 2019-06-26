import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent {
  urlNoMenu:Array<string> = [];
  constructor(public router: Router) {

  }

  ngOnInit() {
    this.urlNoMenu = [
      '/pages/login',
      '/pages/dashbordTV'
    ];
  }
}
