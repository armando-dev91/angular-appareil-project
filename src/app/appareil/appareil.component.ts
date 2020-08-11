import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareil;
  id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
    this.id = this.appareil.id;
  }

  getStatusString() {
    return this.appareil.status ? 'Allumé' : 'Eteint';
  }

  getStatus(): string {
    return this.appareil.status;
  }

  switchOne() {
    this.appareilService.switchOne(this.id);
  }

}
