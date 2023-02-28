import { Component, OnInit ,AfterViewInit} from '@angular/core';

declare const TradingView: any;
declare const TradingView1: any;
declare const TradingView2:any;
declare const TradingView3:any;

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    //Advanced Real-Time Chart Widget
    new TradingView.widget(
      {
      "width": 980,
      "height": 610,
      "symbol": "NASDAQ:AAPL",
      "timezone": "Etc/UTC",
      "theme": "Light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "withdateranges": true,
      "range": "ytd",
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
      "show_popup_button": true,
      "popup_width": "1000",
      "popup_height": "650",
      "no_referral_id": true,
      "container_id": "tradingview_bac65"
    }
  );

  //Technical Analysis Widgets
    new TradingView1.widget(
    {
      "interval": "1m",
      "width": 425,
      "isTransparent": false,
      "height": 450,
      "symbol": "NASDAQ:AAPL",
      "showIntervalTabs": true,
      "locale": "en",
      "colorTheme": "light"
    }
    );

    //Market Overview Widget
    new TradingView2.widget(
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "width": "400",
        "height": "660",
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(106, 109, 120, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)",
        "tabs": [
          {
            "title": "Indices",
            "symbols": [
              {
                "s": "FOREXCOM:SPXUSD",
                "d": "S&P 500"
              },
              {
                "s": "FOREXCOM:NSXUSD",
                "d": "US 100"
              },
              {
                "s": "FOREXCOM:DJI",
                "d": "Dow 30"
              },
              {
                "s": "INDEX:NKY",
                "d": "Nikkei 225"
              },
              {
                "s": "INDEX:DEU40",
                "d": "DAX Index"
              },
              {
                "s": "FOREXCOM:UKXGBP",
                "d": "UK 100"
              }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Futures",
            "symbols": [
              {
                "s": "CME_MINI:ES1!",
                "d": "S&P 500"
              },
              {
                "s": "CME:6E1!",
                "d": "Euro"
              },
              {
                "s": "COMEX:GC1!",
                "d": "Gold"
              },
              {
                "s": "NYMEX:CL1!",
                "d": "Crude Oil"
              },
              {
                "s": "NYMEX:NG1!",
                "d": "Natural Gas"
              },
              {
                "s": "CBOT:ZC1!",
                "d": "Corn"
              }
            ],
            "originalTitle": "Futures"
          },
          {
            "title": "Bonds",
            "symbols": [
              {
                "s": "CME:GE1!",
                "d": "Eurodollar"
              },
              {
                "s": "CBOT:ZB1!",
                "d": "T-Bond"
              },
              {
                "s": "CBOT:UB1!",
                "d": "Ultra T-Bond"
              },
              {
                "s": "EUREX:FGBL1!",
                "d": "Euro Bund"
              },
              {
                "s": "EUREX:FBTP1!",
                "d": "Euro BTP"
              },
              {
                "s": "EUREX:FGBM1!",
                "d": "Euro BOBL"
              }
            ],
            "originalTitle": "Bonds"
          },
          {
            "title": "Forex",
            "symbols": [
              {
                "s": "FX:EURUSD",
                "d": "EUR/USD"
              },
              {
                "s": "FX:GBPUSD",
                "d": "GBP/USD"
              },
              {
                "s": "FX:USDJPY",
                "d": "USD/JPY"
              },
              {
                "s": "FX:USDCHF",
                "d": "USD/CHF"
              },
              {
                "s": "FX:AUDUSD",
                "d": "AUD/USD"
              },
              {
                "s": "FX:USDCAD",
                "d": "USD/CAD"
              }
            ],
            "originalTitle": "Forex"
          }
        ]
      }
    )

    //Market Data Widget
    new TradingView3.widget(
      {
        "width": 770,
        "height": 450,
        "symbolsGroups": [
          {
            "name": "Indices",
            "originalName": "Indices",
            "symbols": [
              {
                "name": "FOREXCOM:SPXUSD",
                "displayName": "S&P 500"
              },
              {
                "name": "FOREXCOM:NSXUSD",
                "displayName": "US 100"
              },
              {
                "name": "FOREXCOM:DJI",
                "displayName": "Dow 30"
              },
              {
                "name": "INDEX:NKY",
                "displayName": "Nikkei 225"
              },
              {
                "name": "INDEX:DEU40",
                "displayName": "DAX Index"
              },
              {
                "name": "FOREXCOM:UKXGBP",
                "displayName": "UK 100"
              }
            ]
          },
          {
            "name": "Futures",
            "originalName": "Futures",
            "symbols": [
              {
                "name": "CME_MINI:ES1!",
                "displayName": "S&P 500"
              },
              {
                "name": "CME:6E1!",
                "displayName": "Euro"
              },
              {
                "name": "COMEX:GC1!",
                "displayName": "Gold"
              },
              {
                "name": "NYMEX:CL1!",
                "displayName": "Crude Oil"
              },
              {
                "name": "NYMEX:NG1!",
                "displayName": "Natural Gas"
              },
              {
                "name": "CBOT:ZC1!",
                "displayName": "Corn"
              }
            ]
          },
          {
            "name": "Bonds",
            "originalName": "Bonds",
            "symbols": [
              {
                "name": "CME:GE1!",
                "displayName": "Eurodollar"
              },
              {
                "name": "CBOT:ZB1!",
                "displayName": "T-Bond"
              },
              {
                "name": "CBOT:UB1!",
                "displayName": "Ultra T-Bond"
              },
              {
                "name": "EUREX:FGBL1!",
                "displayName": "Euro Bund"
              },
              {
                "name": "EUREX:FBTP1!",
                "displayName": "Euro BTP"
              },
              {
                "name": "EUREX:FGBM1!",
                "displayName": "Euro BOBL"
              }
            ]
          },
          {
            "name": "Forex",
            "originalName": "Forex",
            "symbols": [
              {
                "name": "FX:EURUSD",
                "displayName": "EUR/USD"
              },
              {
                "name": "FX:GBPUSD",
                "displayName": "GBP/USD"
              },
              {
                "name": "FX:USDJPY",
                "displayName": "USD/JPY"
              },
              {
                "name": "FX:USDCHF",
                "displayName": "USD/CHF"
              },
              {
                "name": "FX:AUDUSD",
                "displayName": "AUD/USD"
              },
              {
                "name": "FX:USDCAD",
                "displayName": "USD/CAD"
              }
            ]
          }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en"
      }
    );

  }

}
