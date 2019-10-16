import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items : MenuItem[];
  constructor(private _router: Router) { }

  ngOnInit() {
  	this.getMenuData();
  }




  getMenuData() {
  	this.items = [
            {
                label: 'Home',
                command: () => this._router.navigate(['/']),
            },{
                label: 'Contact',
                command: () => this._router.navigate(['/']),
               
            },
            {
                label: 'List',
                icon: 'pi pi-fw pi-pencil',
                command: () => this._router.navigate(['list']),
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
  }


  addNewUser() {
  	this._router.navigate(['list']);
  }

}
