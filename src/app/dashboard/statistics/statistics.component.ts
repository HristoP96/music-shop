import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  public userData: any[];
  constructor( private userService: UserService ) {
    this.userService.getAllUsers();  
  }

  ngOnInit(): void {
    this.userService.allData.subscribe(data => {
      this.userData = data ?? [];
    })
  }
}
