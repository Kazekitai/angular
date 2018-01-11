import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-vue-classique',
  templateUrl: './vue-classique.component.html',
  styleUrls: ['./vue-classique.component.css']
})
export class VueClassiqueComponent implements OnInit {
	collegues:Collegue[] = [];

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
  	this.collegueService.listerCollegues().then(result => {
			for(let i in result) {
				let collegue:Collegue = new Collegue(result[i].id, result[i].pseudo, result[i].imageUrl,result[i].score);
				this.collegues.push(collegue);
        this.exist = true;
			}
	 });
  }

  limitChanges(event) {
      this.limit = event;
  }

}
