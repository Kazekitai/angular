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
	pseudo: string;
	// collegue:Collegue;
	collegue$: Observable<Collegue>;

 	constructor(private route: ActivatedRoute, private collegueService:CollegueService) {
		route.params.subscribe(params => { this.pseudo = params['pseudo'];});
		console.log('pseudo ',this.pseudo);
  	}

  	ngOnInit() {
		this.collegue$ = this.collegueService.recupererCollegueParPseudo(this.pseudo);
		console.log('collegue ',this.collegue$.subscribe((c) => { console.log(c); }));
  	}

}
