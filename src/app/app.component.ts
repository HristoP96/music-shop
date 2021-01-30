import { Component, OnInit } from '@angular/core';
import {testDecorators, testClassDecorator} from '../core/decorators';
@testClassDecorator()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'music-shop';

  @testDecorators()
  public testing(): boolean  {
    return 1 > 2;
  }

  constructor(){
  }

  ngOnInit() {
    console.log(this)
  }
}
