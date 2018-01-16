import { Component, Input,OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-collegue',
  templateUrl: './form-collegue.component.html',
  styleUrls: ['./form-collegue.component.css']
})
export class FormCollegueComponent implements OnInit {
	collegues:Collegue[] = [];
	msg:string;
	succesAjout:boolean= false;
	alertActive:boolean= false;
	alertClass:string;
	aff:boolean = false;
	@Input() status:string;
	actif:boolean = false;

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
	this.collegueService.listerCollegues()
	  .subscribe(collegues => this.collegues = collegues);
	  Observable.interval(5000).subscribe(x => {
		this.collegueService.enLigne();
		this.collegueService.subjectEnLigne.subscribe(st => {
		  this.status = st;
		  if(this.status === 'En ligne'){
			this.actif = true;
			
		  } else {
			this.actif = false;
		  }
		});
	  });
  }

  	add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
		this.aff = true;
		setTimeout(()=> {
			this.aff = false;
			pseudo.value = "";
			imageUrl.value = ""}, 2000)

		let id:number = 0;
		let newCollegue:Collegue = new Collegue(id,pseudo.value,imageUrl.value,0);
		this.collegueService.sauvegarder(newCollegue).subscribe(result => {			
			if(result.succes == "true") {
				let colleg:Collegue = new Collegue(result.entite.id,result.entite.pseudo,result.entite.imageUrl,result.entite.score);
				this.collegues.push(colleg);
				this.alertClass = "alert-success";
				this.succesAjout = true;
				this.collegueService.refresh();
			} else {
				this.alertClass = "alert-danger";
			}
			this.msg = result.message;
			this.alertActive = true;
		});
		return false;
	}

	closeAlert() {
		this.alertActive = false;
	}

}
