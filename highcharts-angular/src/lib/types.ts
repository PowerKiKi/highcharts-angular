import type HighchartsESM from 'highcharts/es-modules/masters/highcharts.src';

export type ChartConstructorType = 'chart' | 'ganttChart' | 'stockChart' | 'mapChart';

export type ModuleFactoryFunction = () => Promise<ModuleFactory>[];
export type InstanceFactoryFunction = () => Promise<Chart['highcharts']>;

export interface ModuleFactory {
  Highcharts?: Chart['highcharts'],
  default?: unknown,
}

export interface Chart {
  options: HighchartsESM.Options,
  update?: boolean,
  highcharts?: typeof HighchartsESM
  constructorChart?: Function;
}

export interface PartialHighchartsConfig {
  modules?: ModuleFactoryFunction;
}

export interface HighchartsConfig {
  instance?: InstanceFactoryFunction;
  options?: Chart['options'];
  modules?: ModuleFactoryFunction;
}
