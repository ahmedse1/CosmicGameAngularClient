import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterResponse } from 'src/app/models/register/register-response';
import { GlobalService } from 'src/app/services/global.service';
import { ChartHolder } from '../../models/chartholders/chart-holder';
import { ChartHoldersService } from '../../services/chart-holders.service';

@Component({
  selector: 'app-chart-holders',
  templateUrl: './chart-holders.component.html',
  styleUrls: ['./chart-holders.component.css']
})
export class ChartHoldersComponent implements OnInit {

  chartHolders: ChartHolder[];
  chartHolder: ChartHolder;
  constructor(private chartHoldersService: ChartHoldersService, private router: Router, private toastr: ToastrService, private globalService: GlobalService) {
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
        }
      }
    )
  }
  deleteChartHolder(id) {
    this.chartHoldersService.removeChartHolderById(id).subscribe(
      res => {
        debugger;
        if(res != null || res != undefined) {
          res = JSON.parse(res);
          if(res.success) {
            this.toastr.success(res.message);
            this.getChartHoldersList();
          }
          else {
            this.toastr.error(res.message);
          }
        }
        else {
          this.toastr.error('Something went wrong!');
        }
      }
    )
  }

  getSingleChartHolder(id) {
    console.log(id)
    debugger
    this.chartHoldersService.getSingleChartHolder(id).subscribe(
      res => {
        debugger;
        if(res != null || res != undefined) {
          res = JSON.parse(res);
          if(res.success) {
            this.chartHolder = res.result;
            this.globalService.setChartHolder(this.chartHolder);
            this.router.navigate(['/ChartHoldersDetails']);
          }
        }
        //     this.toastr.success(res.message);
        //     this.getChartHoldersList();
        //   }
        //   else {
        //     this.toastr.error(res.message);
        //   }
        // }
        // else {
        //   this.toastr.error('Something went wrong!');
        // }
      }
    )
  }

  clearService() {
    this.globalService.clear();
  }
}
