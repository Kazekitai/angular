import { Component, Input, Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton-opinion',
  templateUrl: './bouton-opinion.component.html',
  styleUrls: ['./bouton-opinion.component.css']
})
export class BoutonOpinionComponent implements OnInit {
	@Input() score:number;
	@Output() change: EventEmitter<number> = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	jaime() {
		// événement clic sur le bouton "J'aime"
		// => le score du collègue est augmenté de 10
		this.score += 10
		this.change.emit(this.score)
	}

	jedeteste() {
		// événement clic sur le bouton "Je déteste"
		// => le score du collègue est diminué de 5
		this.score -= 5
		this.change.emit(this.score)
	}

}
