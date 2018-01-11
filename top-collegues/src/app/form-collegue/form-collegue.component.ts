import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import {Collegue} from '../shared/domain/collegue'

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

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
  	// this.collegueService.listerCollegues().then(result => {
	// 	for(let i in result) {
	// 		let collegue:Collegue = new Collegue(result[i].id, result[i].pseudo, result[i].imageUrl,result[i].score);
	// 		this.collegues.push(collegue);
	// 	}
	// });
	this.collegueService.listerCollegues()
      .subscribe(collegues => this.collegues = collegues);
  }

  	add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
		this.aff = true;
		setTimeout(()=> {
			this.aff = false;
			pseudo.value = "";
			imageUrl.value = ""}, 2000)

		let id:number = 0;
		let newCollegue:Collegue = new Collegue(id,pseudo.value,imageUrl.value,0);
		this.collegueService.sauvegarder(newCollegue).then(result => {
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
			} else {
				this.msgColor = "white";
				this.msgBackgroundColor = "red";
			}
			this.msg = result.message;
		});
		return false;
	}

}
