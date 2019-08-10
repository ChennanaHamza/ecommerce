import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.scss']
})
export class SingleproductComponent implements OnInit {

  @Input() produit : any;
  constructor() { }

  ngOnInit() {
  }

}
