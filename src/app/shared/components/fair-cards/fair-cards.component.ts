import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifairs } from '../../model/fairs.interface';

@Component({
  selector: 'app-fair-cards',
  templateUrl: './fair-cards.component.html',
  styleUrls: ['./fair-cards.component.scss']
})
export class FairCardsComponent implements OnInit {

  @Input() getFairs !: Ifairs

  @Output() emitFair : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(fair: Ifairs){
    console.log(fair);
    this.emitFair.emit(fair.fairId)
  }
}
