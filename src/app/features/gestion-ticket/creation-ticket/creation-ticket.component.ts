import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-creation-ticket',
  templateUrl: './creation-ticket.component.html',
  styleUrls: ['./creation-ticket.component.css'],
  styles: [
		`
			.star {
				font-size: 1.5rem;
				padding-right: 0.1rem;
				color: black;
			}
			.filled {
				color:red ;
			}
			.low {
				color: #fcc948;
			}
			.filled.low {
				color:  #ffde8a;
			}
		`,
	],
})
export class CreationTicketComponent {
  currentRate = 0;
listCategory :any;
constructor(private list: CategorieService) {

}
ngOnInit(): void {
    
    this.list.getCategorie().subscribe((allData:any) => {
      this.listCategory = allData;
      })
	  
}



}