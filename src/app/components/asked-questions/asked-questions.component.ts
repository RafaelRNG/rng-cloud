import { Component, OnInit } from '@angular/core';
import { AskedInterface, askeds } from './asked.mockdata';

@Component({
  selector: 'rng-asked-questions',
  templateUrl: './asked-questions.component.html',
  styleUrls: ['./asked-questions.component.scss']
})
export class AskedQuestionsComponent implements OnInit {

  public parentData: string = 'parent data'
  public askeds!: AskedInterface[]

  constructor() { }

  ngOnInit(): void {
    this.askeds = askeds
  }
}
