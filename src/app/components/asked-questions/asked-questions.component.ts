import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rng-asked-questions',
  templateUrl: './asked-questions.component.html',
  styleUrls: ['./asked-questions.component.scss']
})
export class AskedQuestionsComponent implements OnInit {

  public parentData: string = 'parent data'

  constructor() { }

  ngOnInit(): void {
  }

}