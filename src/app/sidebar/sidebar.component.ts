import { Component, Input, OnInit } from '@angular/core';
import {ProfileService}  from '../services/profile.service';
import {Profile} from '../models/profile.model';
import{Menu} from '../models/profile.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menus:Menu []=[];
  // @Input()
   prof:string='admin';
  users:Profile[]=[];
  

  constructor(private service:ProfileService ){}
  
  ngOnInit(): void {

  this.service.getProfil(this.prof).subscribe((res:any)=>{
   console.log(res);
   this.users=res; 
   return res;
 })
}

}
