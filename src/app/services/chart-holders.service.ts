import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ChartHoldersService {

  constructor(private generic: GenericService) { }

  getChartHoldersList() {
    return this.generic.getAll('Client/ChartHolder/ChartHolderList');
  }
}
