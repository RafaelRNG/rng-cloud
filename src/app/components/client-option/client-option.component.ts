import { Component, OnInit } from '@angular/core';
import { ClientInterface, Clients } from './clients.mockdata'

@Component({
  selector: 'rng-client-option',
  templateUrl: './client-option.component.html',
  styleUrls: ['./client-option.component.scss']
})
export class ClientOptionComponent implements OnInit {

  public clients: ClientInterface[] = Clients

  constructor() { }

  ngOnInit(): void {
  }

}
