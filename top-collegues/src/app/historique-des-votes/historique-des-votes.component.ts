import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import {Vote} from '../shared/domain/vote';
import { Observable } from 'rxjs';
import { concat } from 'rxjs/operators/concat';

@Component({
  selector: 'app-historique-des-votes',
  templateUrl: './historique-des-votes.component.html',
  styleUrls: ['./historique-des-votes.component.css']
})
export class HistoriqueDesVotesComponent implements OnInit {
  votes:Vote[];
  msg:string;
  idvote:string;
  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    Observable.interval(5000).subscribe(x => {
      this.collegueService.subjectIdVote.subscribe(id => this.idvote = id);
      this.collegueService.refreshVotes(this.idvote);
      this.collegueService.listerHistoriqueVotes().subscribe(votes => {
        this.votes = votes;
      });
    });
  }

  deleteVote(idVote) {
    this.idvote = idVote;
    this.collegueService.remove(this.votes,String(idVote));
  }

}
