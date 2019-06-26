import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public title:string;
  public columns:Array<string>=[];
  public data:Array<any>=[];
  public createBtn:string;

  constructor() { }

  ngOnInit() {

    this.title = "לקוחות (08)";

    this.createBtn = 'הוסף חברה';

    this.columns = ['שם חברה','ח.פ / ע.מ','כתובת','עיר','מיקוד','טלפון','איש קשר'];

    this.data = [
        {
            id: 1,
            name: 'גמא פיננסים',
            number: '123456789',
            adress: 'הנביאים 25',
            street: 'רחובות',
            postal_code: '123456',
            phone: '08-9963232',
            contact: 'שמעון',
        },
        {
          id: 1,
          name: 'גמא פיננסים',
          number: '123456789',
          adress: 'הנביאים 25',
          street: 'רחובות',
          postal_code: '123456',
          phone: '08-9963232',
          contact: 'שמעון',
        },
        {
          id: 1,
          name: 'גמא פיננסים',
          number: '123456789',
          adress: 'הנביאים 25',
          street: 'רחובות',
          postal_code: '123456',
          phone: '08-9963232',
          contact: 'שמעון',
        },
        {
          id: 1,
          name: 'גמא פיננסים',
          number: '123456789',
          adress: 'הנביאים 25',
          street: 'רחובות',
          postal_code: '123456',
          phone: '08-9963232',
          contact: 'שמעון',
        },
        {
          id: 1,
          name: 'גמא פיננסים',
          number: '123456789',
          adress: 'הנביאים 25',
          street: 'רחובות',
          postal_code: '123456',
          phone: '08-9963232',
          contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
      {
        id: 1,
        name: 'גמא פיננסים',
        number: '123456789',
        adress: 'הנביאים 25',
        street: 'רחובות',
        postal_code: '123456',
        phone: '08-9963232',
        contact: 'שמעון',
      },
    ];
  }

}
