import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {Collegue} from './shared/domain/collegue'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'app';
	collegues:Collegue[];
	msgColor:string;
	msgBackgroundColor:string
	aff:boolean = false


	ngOnInit() {
		this.collegues = [
		new Collegue('Hermione','https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto',10),
		new Collegue('Ron','https://www.quizz.biz/uploads/quizz/687335/orig/1.jpg?1479691894',50), new Collegue('Harry','http://www.jdubuzz.com/files/2016/09/deux-ans-plus-tard-le-revoila-dans-harry-potter-et-la-chambre-des-secrets-il-n-a-presque-pas-bouge.jpg',100)
		];
	}


	add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement) {
		this.aff = true
		setTimeout(()=> {
			this.aff = false;
			pseudo.value = "";
			imageUrl.value = ""}, 2000)
		let tailleAvantAjout = this.collegues.length
		this.collegues[this.collegues.length] = new Collegue(pseudo.value,imageUrl.value,0)
		return false
	}
}
