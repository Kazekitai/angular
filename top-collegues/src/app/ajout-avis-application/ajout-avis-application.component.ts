import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CollegueService } from '../shared/service/collegue.service';
import { AvisApp } from '../shared/domain/avis-app';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ajout-avis-application',
  templateUrl: './ajout-avis-application.component.html',
  styleUrls: ['./ajout-avis-application.component.css']
})
export class AjoutAvisApplicationComponent implements OnInit {
  closeResult: string;
  dialog: NgbModalRef | null;
  avis:AvisApp;
  formAvisApp:FormGroup;
  msg:string;
	alertActive:boolean= false;
	alertClass:string;

  constructor(private collegueService:CollegueService,private modalService: NgbModal,private fb:FormBuilder) {
    this.formAvisApp = this.fb.group({
      mention:"Mauvais",
      message:['',Validators.compose([Validators.required,Validators.maxLength(255),Validators.minLength(20)])]
    });
   }

  ngOnInit() {
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
    // this.avis.mention = this.formAvisApp.get('mention').value;
    // this.avis.message = this.formAvisApp.get('message').value;
    this.avis = new AvisApp(0,this.formAvisApp.get('mention').value,this.formAvisApp.get('message').value)
    console.log(this.avis);
    console.log(this.formAvisApp.get('message'));
    if(this.formAvisApp.status == 'VALID') {
      this.collegueService.sauvegarderAvisApp(this.avis).subscribe(result => {
        console.log('result ',result);			
			if(result.succes == "true") {
				let avisApp:AvisApp = new AvisApp(result.entite.id,result.entite.mention,result.entite.message);
        this.collegueService.refreshAvisApp();
        this.alertClass = "alert-success";
        this.msg = result.message;
			  this.alertActive = true;
      //   if ( this.dialog ) {
      //     this.dialog.dismiss();
      //     this.dialog = null;
      //  }
			} else {
        this.alertClass = "alert-danger";
        this.msg = result.message;
			  this.alertActive = true;
			}
      });
    } else {
      this.alertClass = "alert-danger";
      this.msg = "Le formulaire n'est pas valide";
      this.alertActive = true;
    }

    
  }

}
