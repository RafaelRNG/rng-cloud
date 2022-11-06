import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rng-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {

  @Input() public imagePath!: string
  @Input() public nameClient!: string
  @Input() public tagClient!: string
  @Input() public commentClient!: string
  @Input() public hashtagsClient!: string[]
  @Input() public datePublication!: string

  constructor() { }

  ngOnInit(): void {
  }

}
