import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rng-acordion-item',
  templateUrl: './acordion-item.component.html',
  styleUrls: ['./acordion-item.component.scss']
})
export class AcordionItemComponent implements OnInit {

  @Input() public idAccordionHeader!: string
  @Input() public idAccordionBody!: string
  @Input() public parentData!: string
  @Input() public title!: string
  @Input() public body!: string

  constructor() { }

  ngOnInit(): void {
  }

}
