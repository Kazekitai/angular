import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';
import { Commentaire } from '../shared/domain/commentaire';
import { Observable } from 'rxjs';
import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajout-commentaire',
  templateUrl: './ajout-commentaire.component.html',
  styleUrls: ['./ajout-commentaire.component.css']
})
export class AjoutCommentaireComponent implements OnInit {
  @Input() collegue:Collegue;
  comment:Commentaire = new Commentaire(0,this.collegue,"");
  actif:boolean=false;
  enable:boolean = true;
  closeResult: string;
  dialog: NgbModalRef | null;
	msg:string;
	succesAjout:boolean= false;
	alertActive:boolean= false;
	alertClass:string;



  constructor(private collegueService:CollegueService,private modalService: NgbModal) { }

  ngOnInit() {
    Observable.interval(5000).subscribe(x => {
			this.collegueService.enLigne();
			this.collegueService.subjectEnLigne.subscribe(st => {
			    if(st === 'En ligne'){
				this.actif = true;
			  } else {
				  this.actif = false;
			  }
			});
    });
  }

  open(content) {
    this.dialog = this.modalService.open(content);
    this.dialog.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submit() {
    this.comment.collegue = this.collegue;
    console.log(this.comment);
    this.collegueService.sauvegarderAvis(this.comment).subscribe(result => {
      console.log('result ',result);			
			if(result.succes == "true") {
				let avis:Commentaire = new Commentaire(result.entite.id,result.entite.collegue,result.entite.commentaire);
        this.collegueService.refreshCommentaires();
        if ( this.dialog ) {
          this.dialog.dismiss();
          this.dialog = null;
       }
			} else {
        this.alertClass = "alert-danger";
        this.msg = result.message;
			  this.alertActive = true;
			}
			
		});
  }

}
