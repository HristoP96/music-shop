import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../brands.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public navItems = [];
  public selected;
  private brandId;
  public isLoading = true;

  constructor(private bService: BrandsService) {
    this.bService.getAllBrands();
   }

  ngOnInit(): void {
    this.bService.brands.subscribe(brands => {
      this.navItems = brands
      this.selected = this.navItems[0]
      this.isLoading = false;
    });
  }

  public navigate(item) {
    this.selected = item;
}
}
