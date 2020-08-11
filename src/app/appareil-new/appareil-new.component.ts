import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Appareil from '../model/appareil.model';
import { AppareilService } from '../service/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil-new',
  templateUrl: './appareil-new.component.html',
  styleUrls: ['./appareil-new.component.scss']
})
export class AppareilNewComponent implements OnInit {

  appareilForm: FormGroup;
  defaultAppareilStatus = false;

  constructor(
    private formbuilder: FormBuilder,
    private appareilService: AppareilService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.appareilForm = this.formbuilder.group({
      name: ['', Validators.required],
      status: ''
    });
  }

  onSubmit() {
    const appareil = new Appareil(
      new Date().getTime(),
      this.appareilForm.value.name,
      this.appareilForm.value.status
    );
    this.appareilService.add(appareil);
    this.router.navigate(['appareil-list']);
  }

}
