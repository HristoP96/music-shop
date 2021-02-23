import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';
import * as moment from 'moment';
import { ClusterService } from '../services/cluster.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

 public selectedPeriod = '1 Week';


  constructor(private clusterService: ClusterService, private cdr: ChangeDetectorRef) { }

  public timePeriodValues = [
    {asda: 9, timeUnit: 'weeks', label: '1 Week', selected: this.selectedPeriod === '1 Week'  },
    {asda:7, timeUnit: 'months', label: '1 Month', selected: this.selectedPeriod === '1 Month' },
    {asda:12, timeUnit: 'months', label: '3 Months', selected: this.selectedPeriod === '3 Months' },
    {asda:2, timeUnit: 'years',label: '1 Year', selected: this.selectedPeriod === '1 Year' }
  ]

  public ngAfterViewInit(): void {
    // this.cdr.detectChanges()
  }



  public selectTimePeriod(args: IButtonGroupEventArgs) {
    let periodValues = this.timePeriodValues[args.index];
    let period = moment().subtract(periodValues.asda, periodValues.timeUnit as moment.unitOfTime.DurationConstructor).format("YYYY-MM-DD");
    this.clusterService.getRFMAnalysis(period);
  }

}
