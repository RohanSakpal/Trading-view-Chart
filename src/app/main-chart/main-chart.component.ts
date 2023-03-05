import { Component, OnInit } from '@angular/core';
import { MainServService } from '../services/main-serv.service';
declare const TradingView: any;
@Component({
  selector: 'app-main-chart',
  templateUrl: './main-chart.component.html',
  styleUrls: ['./main-chart.component.scss']
})
export class MainChartComponent implements OnInit {
symbol:string = 'ETHBTC';
interval:string = 'H';
barStyle = '1';
instrumentArr:any[] = [];
intervalArr:any[] = [
  {value:'H',title:'Hourly'},
  {value:'D',title:'Daily'},
  {value:'W',title:'Weekly'},
  {value:'M',title:'Monthly'},
  {value:'12M',title:'Yearly'}
];
barArr:any[] = [
  {value:'1',title:'Candles'},
  {value:'0',title:'Bars'},
  {value:'9',title:'Hollow Cnadles'},
  {value:'8',title:'Heikin Ashi'},
  {value:'2',title:'Line'},
  {value:'3',title:'Area'},
  {value:'4',title:'Renko'},
  {value:'7',title:'Line Break'},
  {value:'5',title:'Kagi'},
  {value:'6',title:'Point and Figure'}
];
  constructor(private mainServ:MainServService) { }

  ngOnInit(): void {
    this.instrumentArr = this.mainServ.exchangeInfo.symbols;
    
  }

  ngAfterViewInit(){
    //Advanced Real-Time Chart Widget
    this.loadChart();
  }

  loadChart() {
    new TradingView.widget(
      //   {
      //   "width": 800,
      //   "height": 450,
      //   "symbol": "NASDAQ:AAPL",
      //   "timezone": "Etc/UTC",
      //   "theme": "Dark",
      //   "style": "1",
      //   "locale": "en",
      //   "toolbar_bg": "#f1f3f6",
      //   "enable_publishing": false,
      //   "withdateranges": true,
      //   "range": "ytd",
      //   "hide_side_toolbar": false,
      //   "allow_symbol_change": true,
      //   "show_popup_button": true,
      //   "popup_width": "1000",
      //   "popup_height": "650",
      //   "no_referral_id": true,
      //   "container_id": "tradingview_bac65"
      // }
      {
        "width": 800,
        "height": 450,
        //"autosize": true,
        "symbol": "BINANCE:"+this.symbol,
        "interval": this.interval,
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": this.barStyle,
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_bac65"
      }
    );
  }

  onSelectedInstrument(val) {
    this.symbol = val;
    //this.loadChart();
  }

  onSelectedDuration(val) {
    this.interval = val;
    //this.loadChart();
  }

  onSelectedBar(val) {
    this.barStyle = val;
    //this.loadChart();
  }

  submitOptions() {
    this.loadChart();
  }
}
