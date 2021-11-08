import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  addclass: any
  
  constructor() {    
    if (window.innerWidth < 658) {
      this.addclass =true     
      } else {
      this.addclass = false      
      }
  }
  
  ngOnInit(): void { }   

}
