import { ChangeDetectionStrategy, Component } from '@angular/core';
import type Highcharts from 'highcharts';
import { HighchartsChartComponent } from '../../../../highcharts-angular/src/public_api';

interface ExtendedSeriesCandlestickOptions extends Highcharts.SeriesCandlestickOptions {
  color: Highcharts.ColorType;
}

@Component({
  selector: 'app-line-test',
  templateUrl: './line-test.component.html',
  styleUrls: ['./line-test.component.css'],
  imports: [HighchartsChartComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineTestComponent {
  updateFlag = false;
  chartInstance: Highcharts.Chart;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [1, 2, 3]
      }
    ]
  };

  updateSeriesColor() {
    (this.chartOptions.series[0] as ExtendedSeriesCandlestickOptions).color = 'hotpink';
    this.updateFlag = true;
  }
}
