import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../model/fairs.interface';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {

@Input()  getSelectedFair !: Ifairs

  constructor() { }

  ngOnInit(): void {
  }

}
