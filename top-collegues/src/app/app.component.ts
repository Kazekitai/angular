import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Collegue} from './shared/domain/collegue'
import { CollegueService } from './shared/service/collegue.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	collegues:Collegue[] = [];
	msgColor:string;
	msgBackgroundColor:string;
	msg:string;
	succesAjout:boolean= false;
	aff:boolean = false;

	constructor(private collegueService:CollegueService) { }


	ngOnInit() {
		this.collegueService.listerCollegues().then(result => {
			for(let i in result) {
				let collegue:Collegue = new Collegue(result[i].id, result[i].pseudo, result[i].imageUrl,result[i].score);
				this.collegues.push(collegue);
			}
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
