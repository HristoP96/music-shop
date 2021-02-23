import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../services/user.service';
import * as moment from 'moment';
import { ClusterService } from '../services/cluster.service';
import { IgxPieChartComponent } from 'igniteui-angular-charts';

export interface IRFMValues {
  Recency: number,
  Monetary: number;
  Frequency: number;
  Volume: number
}
export interface IClusterData {
  [key: number]: IRFMValues
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit, OnDestroy {

  public clusterData: any[];
  public userData: any[];

  @ViewChild("grid", {read: IgxGridComponent})
  public grid: IgxGridComponent;

  @ViewChild("pieChart1", {read: IgxPieChartComponent})
  public pChart: IgxPieChartComponent;

  @ViewChild("emptyTemplate", {read: TemplateRef})
  public emptyTemplate: TemplateRef<any>;

  public clusterColumns = ["Cluster ID", "Recency", "Frequency", "Monetary"];
  public expansionStates: Map<any, boolean> = new Map();
  public isRFMLoading = true;
  public isCustomersLoading = false;
  public pData = [{"Cluster ID": 1, "Volume": 200}, {"Cluster ID": 2, "Volume": 100}];
  constructor(private userService: UserService, private clusterService: ClusterService) { }

  arrayify(obj: IClusterData[]) {
    let res = []

    Object.keys(obj).forEach(k => {
      obj[k]['Cluster ID'] = k
      res.push(obj[k]);
    });
    
    return res;
  }

  ngOnInit(): void {

    this.clusterService.clusters.subscribe((clusterData: IClusterData[] ) => {
       if(clusterData.length) {
         this.isRFMLoading = false;
         this.clusterData = this.arrayify(JSON.parse(clusterData as any));
       }
    });

    this.userService.allData.subscribe(data => {
      this.userData = data;
      this.isCustomersLoading = false
    })

  }

  sliceClick(e) {

    e.sender.explodedSlices.clear()
    e.args.isExploded = !e.args.isExploded;
    if(e.args.isExploded) {
      this.userService.getUsersPerCluster(e.args.index)
      this.isCustomersLoading = true
    }

  }
  

  ngOnDestroy(){
    this.userService.allData.unsubscribe()
  }

  ngAfterViewInit(): void {
    this.pChart.legendLabelMemberPath = "Volume"
    this.pChart.formatLegendLabel = (obj) => {
     
      return `Cluster ${obj.item['Cluster ID']} - ${obj.item['Volume']} Customers`
    }
    this.pChart.formatLabel = (obj) => {
     
      return `Cluster ${obj.item['Cluster ID']}`
    }

    this.grid.emptyGridDefaultTemplate = this.emptyTemplate;
  }
}
