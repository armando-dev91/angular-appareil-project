import { Injectable } from '@angular/core';
import Appareil from '../model/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  private appareils: Appareil[] = [
    {id: 1, name: 'Téléviseur', status: false},
    {id: 2, name: 'Congélateur', status: false},
    {id: 3, name: 'Climatiseur', status: false},
    {id: 4, name: 'Ordinateur', status: true},
  ];

  constructor() { }

  findAll() {
    return this.appareils;
  }

  find(id: number) {
    return this.appareils.find(item => item.id === id);
  }

  add(appareil: Appareil) {
    this.appareils = [appareil, ...this.appareils];
  }

  switchOnAll() {
    this.switchAll(true);
  }

  switchOffAll() {
    this.switchAll(false);
  }

  switchOne(id: number) {
    this.appareils.map(item => {
      if (item.id === id) {
        item.status = !item.status;
      }
    });
  }

  private switchAll(status: boolean) {
    this.appareils.map(item => item.status = status);
  }
}
