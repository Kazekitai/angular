import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
  votePlus:boolean = false;
  voteMoins:boolean = false;
  voteNull:boolean = false;
  avis:string[];
  msg:string;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    console.log('subject recup ', this.collegueService.subjectAvis.getValue());
    this.collegueService.subjectAvis.subscribe(data => {
      console.log(data)
      this.avis = data;
      if(this.avis[1] == "aimer") {
        this.msg = "J'aime " + this.avis[0];
      } else if(this.avis[1] == "detester") {
        this.msg = "J'aime pas " + this.avis[0];
      } else {
        this.msg = "Aucun vote";
      }
    });
    
  }
  

}
