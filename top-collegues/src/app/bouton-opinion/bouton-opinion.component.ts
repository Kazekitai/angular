import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton-opinion',
  templateUrl: './bouton-opinion.component.html',
  styleUrls: ['./bouton-opinion.component.css']
})
export class BoutonOpinionComponent implements OnInit {
	@Input() collegue:Collegue;
	@Output() jaime: EventEmitter<any> = new EventEmitter();
	@Output() jedeteste: EventEmitter<any> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	jaime() {
		// événement clic sur le bouton "J'aime"
		// => le score du collègue est augmenté de 10
		collegue.score += 10
	}

	jedeteste() {
		// événement clic sur le bouton "Je déteste"
		// => le score du collègue est diminué de 5
		collegue.score -= 5
	}

}
