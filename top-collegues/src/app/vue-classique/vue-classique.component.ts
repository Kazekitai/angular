import { Component, OnInit } from '@angular/core';
import {Collegue} from '../shared/domain/collegue'
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vue-classique',
  templateUrl: './vue-classique.component.html',
  styleUrls: ['./vue-classique.component.css']
})
export class VueClassiqueComponent implements OnInit {
  collegues: Collegue[];
  limite:number;
  inputPseudo:string;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.subject.subscribe(col => this.collegues = col );
    this.collegueService.subject.next(this.collegues);
  }

  limitChanges(event) {
      if(event && event.target) {
        this.limite = Number(event.target.value);
      }
  }

  handleEventChanged(newLimite:number){
    if(newLimite > 0) {
      return this.limite = newLimite;
    }
    return this.limite = this.collegues.length;
      
  }

  searchChanges(event) {
    if(event && event.target) {
      this.inputPseudo = event.target.value;
    }
  }

  handleSearchEventChanged(newinputPseudo:string){
    return this.inputPseudo = newinputPseudo;
  }


}
