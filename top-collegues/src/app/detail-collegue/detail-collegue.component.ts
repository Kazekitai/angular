import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollegueService } from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue'

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.css']
})
export class DetailCollegueComponent implements OnInit {
	pseudo: string;
	@Input() collegue:Collegue;

 	constructor(private route: ActivatedRoute, private collegueService:CollegueService) {
		route.params.subscribe(params => { this.pseudo = params['pseudo'];});
  	}

  	ngOnInit() {
  		this.collegueService.recupererCollegueParPseudo(this.pseudo).then(result => {
			this.collegue = new Collegue(result[0].id, result[0].pseudo, result[0].imageUrl,result[0].score);
			console.log('collegue', this.collegue );
		});
  	}

}
