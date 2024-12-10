import {provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { provideHighCharts } from 'highcharts-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideClientHydration(withEventReplay()),
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideHighCharts({
      instance: () => import('highcharts/es-modules/masters/highcharts.src').then(m => m.default),
      options: {
        title: {
          style: {
            color: 'tomato'
          }
        },
        legend: {
          enabled: false
        }
      },
      // The modules will work for all charts.
      modules: () => {
        return [
          import('highcharts/es-modules/masters/highcharts-more.src'),
          import('highcharts/es-modules/masters/modules/accessibility.src'),
          import('highcharts/es-modules/masters/modules/exporting.src'),
          import('highcharts/es-modules/masters/themes/sunset.src')
        ]
      }
    })
  ]
};
