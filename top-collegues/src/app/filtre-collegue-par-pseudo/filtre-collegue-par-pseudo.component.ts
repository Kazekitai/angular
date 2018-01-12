import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre-collegue-par-pseudo',
  templateUrl: './filtre-collegue-par-pseudo.component.html',
  styleUrls: ['./filtre-collegue-par-pseudo.component.css']
})
export class FiltreCollegueParPseudoComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  inputPseudo:string;

  constructor() { }

  ngOnInit() {
  }

  handleSearchChanges(event) {
		this.inputPseudo = event.target.value;
		if(event.target.value != "") {
      this.change.emit(this.inputPseudo);
		}
	}

}
