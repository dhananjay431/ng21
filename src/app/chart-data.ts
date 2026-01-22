import { Injectable } from '@angular/core';
import colorLib from '@kurkle/color';
import { DateTime } from 'luxon';

// import { valueOrDefault } from '../../dist/helpers.js';

// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
@Injectable({
  providedIn: 'root',
})
export class ChartData {
  _seed = Date.now();

  srand(seed: any) {
    this._seed = seed;
  }

  valueOrDefault(value: any, defaultValue: any) {
    return value === undefined ? defaultValue : value;
  }

  rand(min: any, max: any) {
    min = this.valueOrDefault(min, 0);
    max = this.valueOrDefault(max, 0);
    this._seed = (this._seed * 9301 + 49297) % 233280;
    return min + (this._seed / 233280) * (max - min);
  }

  // numbers({ count, min, max }: { count: number; min: number; max: number }) {
  //   return Array.from({ count }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  // }

  numbers({ count, min, max }: any) {
    if (max - min + 1 < count) {
      throw new Error('Range is too small for unique values');
    }

    const set = new Set();
    while (set.size < count) {
      set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return [...set];
  }

  points(config: any) {
    const xs = this.numbers(config);
    const ys = this.numbers(config);
    return xs.map((x, i) => ({ x, y: ys[i] }));
  }

  bubbles(config: any) {
    return this.points(config).map((pt: any) => {
      pt.r = this.rand(config.rmin, config.rmax);
      return pt;
    });
  }

  labels(config: any) {
    var cfg = config || {};
    var min = cfg.min || 0;
    var max = cfg.max || 100;
    var count = cfg.count || 8;
    var step = (max - min) / count;
    var decimals = cfg.decimals || 8;
    var dfactor = Math.pow(10, decimals) || 0;
    var prefix = cfg.prefix || '';
    var values = [];
    var i;

    for (i = min; i < max; i += step) {
      values.push(prefix + Math.round(dfactor * i) / dfactor);
    }

    return values;
  }

  MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  months(config: any) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      value = this.MONTHS[Math.ceil(i) % 12];
      values.push(value.substring(0, section));
    }

    return values;
  }

  COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba',
  ];

  color(index: any) {
    return this.COLORS[index % this.COLORS.length];
  }

  transparentize(value: any, opacity: any) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return colorLib(value).alpha(alpha).rgbString();
  }

  CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
  };

  NAMED_COLORS = [
    this.CHART_COLORS.red,
    this.CHART_COLORS.orange,
    this.CHART_COLORS.yellow,
    this.CHART_COLORS.green,
    this.CHART_COLORS.blue,
    this.CHART_COLORS.purple,
    this.CHART_COLORS.grey,
  ];

  namedColor(index: any) {
    return this.NAMED_COLORS[index % this.NAMED_COLORS.length];
  }

  newDate(days: any) {
    return DateTime.now().plus({ days }).toJSDate();
  }

  newDateString(days: any) {
    return DateTime.now().plus({ days }).toISO();
  }

  parseISODate(str: any) {
    return DateTime.fromISO(str);
  }
}
