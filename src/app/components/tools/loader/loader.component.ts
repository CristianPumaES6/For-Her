import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  // Datos de entrada del componente
  @Input() public loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = true;
  }

}
