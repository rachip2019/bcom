<<<<<<< HEAD
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
=======
import { Component } from '@angular/core';
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

<<<<<<< HEAD
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
=======
export class PagesComponent { }
>>>>>>> b173b67c7eb78342843fc4b8751c6d793482bb5e
