import {floor} from 'lodash';

export const chartColors: string[] = [
    '#0052D9',
    '#009944',
    '#EBB103',
    '#00C9D2',
    '#F16DC3',
    '#0694FA',
    '#ED7B2F',
    '#854CA8',
    '#C9353F',
    '#6B6B6B'
]

export const randomColor16 = () => {
  // 十六进制颜色随机
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `#${  r.toString(16)  }${g.toString(16)  }${b.toString(16)}`;
  return color;
};

export function formatNum(val: any, digit = 2, scale = 10000, unit = '万') {
  const v = val * 1;
  if (!v || Number.isNaN(v) || String(v) === 'Infinity') return (0.0)?.toFixed?.(digit) ?? 0;
  // if(!isFloat(v)) return 
  let result: any = floor?.(val, digit) ?? val;
  if (val > scale && val < Math.pow(scale, 2)) {
    // if (val > scale && val <= scale * 100) {
    result = val / scale;
    // result = `${result?.toFixed?.(digit) ?? result} ${unit}`;
    result = `${floor?.(result, digit) ?? result} ${unit}`;
  }
  // if (val >= scale * 100 && val < scale * 1000) {
  //   result = val / (scale * 100);
  //   result = `${result?.toFixed?.(digit) ?? result} 百${unit}`;
  // }
  // if (val >= scale * 1000 && val < scale * scale) {
  //   result = val / (scale * 1000);
  //   result = `${result?.toFixed?.(digit) ?? result} 千${unit}`;
  // }
  if (val >= Math.pow(scale, 2) && val < Math.pow(scale, 3)) {
    result = val / Math.pow(scale, 2);
    // result = `${result?.toFixed?.(digit) ?? result} 亿`;
    result = `${floor?.(result, digit) ?? result} 亿`;
  }
  // if (val >= scale * scale * 100 && val < scale * scale * 1000) {
  //   result = val / (scale * scale);
  //   result = `${result?.toFixed?.(digit) ?? result} 百亿`;
  // }
  // if (val >= scale * scale * 1000 && val < scale * scale * 10000) {
  //   result = val / (scale * scale);
  //   result = `${result?.toFixed?.(digit) ?? result} 千亿`;
  // }
  if (val >= Math.pow(scale, 3) && val < Math.pow(scale, 4)) {
    result = val / Math.pow(scale, 3);
    result = `${floor?.(result, digit) ?? result} 万亿`;
  }
  if (val >= Math.pow(scale, 4)) {
    result = val / Math.pow(scale, 4);
    // result = `${result?.toFixed?.(digit) ?? result} 兆`;
    result = `${floor?.(result, digit) ?? result} 兆`;
  }
  return result;
}