import { Component, OnInit } from '@angular/core';
import { RegisterResponse } from 'src/app/models/register/register-response';
import { ChartHolder } from '../../models/chartholders/chart-holder';
import { ChartHoldersService } from '../../services/chart-holders.service';

@Component({
  selector: 'app-chart-holders',
  templateUrl: './chart-holders.component.html',
  styleUrls: ['./chart-holders.component.css']
})
export class ChartHoldersComponent implements OnInit {

  chartHolders: ChartHolder[];
  registerResponse: RegisterResponse;
  constructor(private chartHoldersService: ChartHoldersService) {
    this.chartHolders = [];
   }

  ngOnInit(): void {
    this.getChartHoldersList();
  }


  getChartHoldersList() {
    this.chartHoldersService.getChartHoldersList().subscribe(
      res => {
        debugger;
        if(res != null || res != undefined) {
          res = JSON.parse(res);
          res = res.result;
          this.chartHolders = res;
          // if(this.registerResponse.result) {
          //   this.chartHolders = res.result;
          // }
        }
      }
    )
  }
  createChartHolder() {
    return
  }

}
