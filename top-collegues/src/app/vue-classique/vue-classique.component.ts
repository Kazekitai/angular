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
  collegues$: Observable<Collegue[]>;
  limite:number;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegues$ = this.collegueService.listerCollegues();
  }

  limitChanges(event) {
      if(event && event.target) {
        this.limite = Number(event.target.value);
      }
      
  }

  handleEventChanged(newLimite:number){
    return this.limite = newLimite;
}


}
