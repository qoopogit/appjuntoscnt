import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }


  mobbing() {
    this.route.navigate(['/test-sufro-mobbing']);
  }

  violencia() {
    this.route.navigate(['/test-sufro-violencia']);
  }

  violento() {
    this.route.navigate(['/test-soy-violento']);
  }

  dependiente() {
    this.route.navigate(['/test-dependiente']);
  }


}
