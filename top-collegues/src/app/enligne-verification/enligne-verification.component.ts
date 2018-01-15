import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-enligne-verification',
  templateUrl: './enligne-verification.component.html',
  styleUrls: ['./enligne-verification.component.css']
})
export class EnligneVerificationComponent implements OnInit {
  status:string;
  enligne:boolean;
  @Output() changeActif: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor(private collegueService:CollegueService) { }

  ngOnInit() {
    Observable.interval(5000).subscribe(x => {
      this.collegueService.enLigne();
      this.collegueService.subjectEnLigne.subscribe(st => {
        this.status = st;
      });
    });
    
  }

}
