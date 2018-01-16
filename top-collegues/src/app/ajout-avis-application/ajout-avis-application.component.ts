import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CollegueService } from '../shared/service/collegue.service';
import { AvisApp } from '../shared/domain/avis-App';
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
    console.log(this.avis);
    if(!this.formAvisApp.get('message').invalid && !this.formAvisApp.get('message').errors.required 
    && (!this.formAvisApp.get('message').dirty || !this.formAvisApp.get('message').touched
    && !this.formAvisApp.get('message').errors.maxlength && !this.formAvisApp.get('message').errors.minlength)) {
      this.collegueService.sauvegarderAvisApp(this.avis).subscribe(result => {
        console.log('result ',result);			
			if(result.succes == "true") {
				let avisApp:AvisApp = new AvisApp(result.entite.id,result.entite.mention,result.entite.message);
        this.collegueService.refreshAvisApp();
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

}
