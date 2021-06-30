import { StocksService, StockInterface } from './../../services/stocks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  stocks: Array<StockInterface> | undefined;
  
  symbols: Array<string>; constructor(private service: StocksService) {
    this.symbols = service.get();
  }
  
  ngOnInit(): void {
    this.service.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks)
  }

}
