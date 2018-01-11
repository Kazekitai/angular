import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue';

@Component({
  selector: 'app-bouton-opinion',
  templateUrl: './bouton-opinion.component.html',
  styleUrls: ['./bouton-opinion.component.css']
})
export class BoutonOpinionComponent implements OnInit {
	@Input() collegue:Collegue;
	@Output() change: EventEmitter<number> = new EventEmitter<number>();

	constructor(private collegueService:CollegueService) {}

	ngOnInit() {
	}

	jaime() {
		// événement clic sur le bouton "J'aime"
		// => le score du collègue est augmenté de 10
		let score:number = this.collegue.score;
		this.collegueService.aimerUnCollegue(this.collegue)
      	.subscribe(collegue => {
			score = collegue.score;
			this.change.emit(score);
		});
	}

	jedeteste() {
		// événement clic sur le bouton "Je déteste"
		// => le score du collègue est diminué de 5
		let score:number = this.collegue.score;
		this.collegueService.detesterUnCollegue(this.collegue)
      	.subscribe(collegue => {
			score = collegue.score;
			this.change.emit(score);
		});
	}

}
