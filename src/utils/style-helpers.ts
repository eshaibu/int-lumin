export const colors = {
  white: '#ffffff',
  gray1: '#f5f5f4',
  gray2: '#fcfcfa',
};

export const GRID_UNIT = 8;

export const spacing = (...args: number[]): string => {
  return args
    .slice(0, 4)
    .reduce((str, pts) => `${str} ${pts * GRID_UNIT}px`, '')
    .trim();
};

export const getBaseFontSize = (): number => {
  const sizeString: string[] = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue('font-size')
    .match(/\d+/) ?? [''];
  return +sizeString[0] || 16;
};

export const fontSize = (size: number) => `${size / getBaseFontSize()}rem`;
