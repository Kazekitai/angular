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
	msgColor:string;
	msgBackgroundColor:string;
	msg:string;
	succesAjout:boolean= false;
	aff:boolean = false;
	saveSuccess:boolean =  false;
	saveError:boolean =  false;
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
			let collegueJson = JSON.parse(result.entite);
			console.log(result)
			console.log(collegueJson);
			
			if(result.succes == "true") {
				let colleg:Collegue = new Collegue(collegueJson.id,collegueJson.pseudo,collegueJson.imageUrl,collegueJson.score);
				console.log('colleg ', colleg);
				this.collegues.push(colleg);
				this.msgColor = "green";
				this.msgBackgroundColor = "lightgreen";
				this.succesAjout = true;
				this.saveSuccess = true;
			} else {
				this.msgColor = "white";
				this.msgBackgroundColor = "red";
				this.saveError = true;
			}
			this.msg = result.message;
		});
		return false;
	}

	estEnLigne() {

	}

}
