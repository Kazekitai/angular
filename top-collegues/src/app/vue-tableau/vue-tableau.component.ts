import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-vue-tableau',
  templateUrl: './vue-tableau.component.html',
  styleUrls: ['./vue-tableau.component.css']
})
export class VueTableauComponent implements OnInit {
	collegues:Collegue[] = [];

  	constructor(private collegueService:CollegueService) { }

  	ngOnInit() {
	  	this.collegueService.listerCollegues().then(result => {
				for(let i in result) {
					let collegue:Collegue = new Collegue(result[i].id, result[i].pseudo, result[i].imageUrl,result[i].score);
					this.collegues.push(collegue);
				}
		});
  	}


  	




}
