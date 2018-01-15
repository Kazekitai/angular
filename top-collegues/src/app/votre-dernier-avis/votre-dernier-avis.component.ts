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
  alertClass:string;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    this.collegueService.subjectAvis.subscribe(data => {
      this.avis = data;
      if(this.avis[1] == "aimer") {
        this.msg = "J'aime " + this.avis[0];
        this.alertClass = "alert-success";
      } else if(this.avis[1] == "detester") {
        this.msg = "J'aime pas " + this.avis[0];
        this.alertClass = "alert-danger";
      } else {
        this.msg = "Aucun vote";
        this.alertClass = "alert-grey";
      }
    });
    
  }
  

}
