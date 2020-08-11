import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil-list',
  templateUrl: './appareil-list.component.html',
  styleUrls: ['./appareil-list.component.scss']
})
export class AppareilListComponent implements OnInit {

  appareils: any[];

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.appareils = this.appareilService.findAll();
  }

  switchOnAll() {
    this.appareilService.switchOnAll();
  }

  switchOffAll() {
    this.appareilService.switchOffAll();
  }

}
