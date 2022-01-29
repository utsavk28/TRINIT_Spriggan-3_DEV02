export const getItemFromStore = (key, defaultValue, store = localStorage) =>
  JSON.parse(store.getItem(key)) || defaultValue;

  export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, JSON.stringify(payload));

  //===============================
// Colors
//===============================
export const hexToRgb = hexValue => {
    let hex;
    hexValue.indexOf('#') === 0
      ? (hex = hexValue.substring(1))
      : (hex = hexValue);
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)
    );
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : null;
  };
  
  export const rgbColor = (color = colors[0]) => `rgb(${hexToRgb(color)})`;
  export const rgbaColor = (color = colors[0], alpha = 0.5) =>
    `rgba(${hexToRgb(color)},${alpha})`;
  
  export const colors = [
    '#2c7be5',
    '#00d97e',
    '#e63757',
    '#39afd1',
    '#fd7e14',
    '#02a8b5',
    '#727cf5',
    '#6b5eae',
    '#ff679b',
    '#f6c343'
  ];
  
  export const themeColors = {
    primary: '#2c7be5',
    secondary: '#748194',
    success: '#00d27a',
    info: '#27bcfd',
    warning: '#f5803e',
    danger: '#e63757',
    light: '#f9fafd',
    dark: '#0b1727'
  };
  
  export const grays = {
    white: '#fff',
    100: '#f9fafd',
    200: '#edf2f9',
    300: '#d8e2ef',
    400: '#b6c1d2',
    500: '#9da9bb',
    600: '#748194',
    700: '#5e6e82',
    800: '#4d5969',
    900: '#344050',
    1000: '#232e3c',
    1100: '#0b1727',
    black: '#000'
  };
  
  export const darkGrays = {
    white: '#fff',
    1100: '#f9fafd',
    1000: '#edf2f9',
    900: '#d8e2ef',
    800: '#b6c1d2',
    700: '#9da9bb',
    600: '#748194',
    500: '#5e6e82',
    400: '#4d5969',
    300: '#344050',
    200: '#232e3c',
    100: '#0b1727',
    black: '#000'
  };
  
  export const getGrays = isDark => (isDark ? darkGrays : grays);
  
  export const rgbColors = colors.map(color => rgbColor(color));
  export const rgbaColors = colors.map(color => rgbaColor(color));
  
  export const getColor = (name, dom = document.documentElement) => {
    return getComputedStyle(dom).getPropertyValue(`--falcon-${name}`).trim();
  };
  
  export const isIterableArray = array => Array.isArray(array) && !!array.length;

  //===============================
// Breakpoints
//===============================
export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

export const capitalize = str =>
  (str.charAt(0).toUpperCase() + str.slice(1)).replace(/-/g, ' ');

export const camelize = str => {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
};
  //routes helper

export const flatRoutes = childrens => {
  const allChilds = [];

  const flatChild = childrens => {
    childrens.forEach(child => {
      if (child.children) {
        flatChild(child.children);
      } else {
        allChilds.push(child);
      }
    });
  };
  flatChild(childrens);

  return allChilds;
};

export const getFlatRoutes = children =>
  children.reduce(
    (acc, val) => {
      if (val.children) {
        return {
          ...acc,
          [camelize(val.name)]: flatRoutes(val.children)
        };
      } else {
        return {
          ...acc,
          unTitled: [...acc.unTitled, val]
        };
      }
    },
    { unTitled: [] }
  );
