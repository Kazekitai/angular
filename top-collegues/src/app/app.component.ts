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
			this.collegues.push(result);
		});
		return false;
	}

}
