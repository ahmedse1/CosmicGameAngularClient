import { Injectable } from '@angular/core';
import { ChartHolder } from '../models/chartholders/chart-holder';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  chartHolder: ChartHolder;
  constructor() { }

  setChartHolder(chartHolder: ChartHolder) {
    this.chartHolder = chartHolder;
  }
  getChartHolder(): ChartHolder {
    return this.chartHolder;
  }

  clear() {
    this.chartHolder = null;
  }
}
