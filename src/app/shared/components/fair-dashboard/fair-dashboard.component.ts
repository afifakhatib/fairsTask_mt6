import { Component, OnInit } from '@angular/core';
import { fairsArr } from '../../const/fairs';
import { Ifairs } from '../../model/fairs.interface';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {

  fairsData : Array<Ifairs> = fairsArr

  selectedFair !: Ifairs
  
  constructor() { }

  ngOnInit(): void {
    this.selectedFair = this.fairsData[0]
  }

  onEmitFair(id : string){
      console.log(id);
      this.selectedFair = this.fairsData.find(find => find.fairId === id)!
  }
}
