import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rng-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() public idAccordionHeader?: string
  @Input() public idAccordionBody?: string
  @Input() public parentData?: string
  @Input() public title?: string
  @Input() public body?: string

  constructor() { }

  ngOnInit(): void {
  }

}
