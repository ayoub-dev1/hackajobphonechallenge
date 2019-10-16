import { Component, OnInit } from '@angular/core';
import { ContactService } from './../../services/contact.service';
import { ContactPhone } from './../../interfaces/contact.model';

import { LazyLoadEvent, SelectItem} from 'primeng/components/common/api'; 


@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.scss']
})
export class ListcontactComponent implements OnInit {

	 contacts:ContactPhone[];

   lazyContacts: ContactPhone[];

   TotalLazyContactNumber: number;

   timeout: any;

   sortKey: string;

   sortOptions: SelectItem[];






   selectedContact: ContactPhone;

   displayDialog: boolean;

  

  constructor(private conatctService: ContactService) {

   }



  ngOnInit() {

  	this.conatctService.getPhonesContact().subscribe(data => {
  		this.contacts = data['contacts'];

  	});
    this.sortoptionadd();
  }



 loadContactLazy(event: LazyLoadEvent) {
   if(this.timeout) {
     clearTimeout(this.timeout)
   }

   this.timeout = setTimeout(() => {
     this.lazyContacts = [];
     if(this.contacts) {
       this.lazyContacts = this.contacts.slice(event.first, (event.first+ event.rows));
     }
   }, 1000);


 }



  sortoptionadd() {
     this.sortOptions  = [
            { label: 'Name A-Z', value: 'name' },
            { label: 'Name Z-A', value: '!name' },
     ]
  }



   selectContact(event , contact: ContactPhone) {
        this.selectedContact = contact;
        this.displayDialog = true;
    }


  onDialogHide() {
          this.selectedContact = null;
      }


    onSortChange() {
      if(this.sortKey.indexOf('!') === 0) {
        this.sort(-1)
      } else {
        this.sort(1);
      }
    }

 sort(order: number): void {
        let contacts = [...this.contacts];
        contacts.sort((data1, data2) => {
            let value1 = data1.name;
            let value2 = data2.name;
            let result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

            return (order * result);
        });

        this.contacts = contacts;
    }


}
