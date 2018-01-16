import { Component, Input, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Commentaire } from '../shared/domain/commentaire';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-list-commentaires',
  templateUrl: './list-commentaires.component.html',
  styleUrls: ['./list-commentaires.component.css']
})
export class ListCommentairesComponent implements OnInit {
  @Input() collegue:Collegue;

  constructor(private collegueService:CollegueService) { }
  commentaires:Commentaire[];

  ngOnInit() {
    this.collegueService.subjectCommentaire.subscribe(data => {
      this.commentaires = data.filter(c => c.collegue.pseudo === this.collegue.pseudo);
      console.log('commentaires ',data);
      console.log('commentaires ',this.commentaires);
    });
  }

}
