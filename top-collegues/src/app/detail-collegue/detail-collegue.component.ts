import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
	pseudo: string = "";
	collegue:Collegue;

 	constructor(private route: ActivatedRoute, private collegueService:CollegueService) {
  	}

  	ngOnInit() {
		  
		this.route.params.subscribe(params => {
			this.pseudo = params['pseudo'];
			console.log('this.pseudo, ',this.pseudo);
			this.collegueService.subject.subscribe(data => {
				if(data.length > 0){
					this.collegue = data.filter(c => c.pseudo === this.pseudo )[0];
					console.log('data, ',data);
					console.log('this.collegue, ',this.collegue);
				} else {
					this.collegue = new Collegue(0,"Un collegue","",0);
				}
				
			});
		});
  	}

}
