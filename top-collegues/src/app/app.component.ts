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
		new Collegue('Aline','https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto',100),
		new Collegue('Hugues','http://www.math.uni-frankfurt.de/~person/_4170854.jpg',100)
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
