import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-quote',
  templateUrl: './card-quote.component.html',
  styleUrls: ['./card-quote.component.scss']
})
export class CardQuoteComponent implements OnInit {
  // Create model
  @Input() data: any
  constructor() { }

  ngOnInit(): void {
  }

}
