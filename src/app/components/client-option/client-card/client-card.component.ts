import { Component, Input } from '@angular/core';

@Component({
  selector: 'rng-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent {

  @Input() public imagePath!: string
  @Input() public nameClient!: string
  @Input() public tagClient!: string
  @Input() public commentClient!: string
  @Input() public hashtagsClient!: string[]
  @Input() public datePublication!: string
}
