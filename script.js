const select = document.getElementById('theme-select');
const root = document.documentElement;

const accents = {
  '#059F75': {
    rgb: '5, 159, 117',
    dark: '#047559',
    light: '#f2fffb',
    text: '#163232',
    muted: '#5c7a7a',
    background: '#ffffff'
  },
  '#F46B53': {
    rgb: '244, 107, 83',
    dark: '#d1553f',
    light: '#fff6f4',
    text: '#31130f',
    muted: '#7a5650',
    background: '#ffffff'
  },
  '#FF8A8B': {
    rgb: '255, 138, 139',
    dark: '#f35c63',
    light: '#fff5f6',
    text: '#311316',
    muted: '#81565b',
    background: '#ffffff'
  },
  '#0392CE': {
    rgb: '3, 146, 206',
    dark: '#0272a0',
    light: '#f2f8ff',
    text: '#102a39',
    muted: '#567489',
    background: '#ffffff'
  },
  '#035259': {
    rgb: '3, 82, 89',
    dark: '#023f45',
    light: '#eef7f8',
    text: '#0d1f22',
    muted: '#4f686d',
    background: '#ffffff'
  }
};

function updateTheme(color) {
  const palette = accents[color];
  if (!palette) return;
  root.style.setProperty('--primary', color);
  root.style.setProperty('--primary-rgb', palette.rgb);
  root.style.setProperty('--primary-dark', palette.dark);
  root.style.setProperty('--primary-light', palette.light);
  root.style.setProperty('--text', palette.text);
  root.style.setProperty('--muted', palette.muted);
  root.style.setProperty('--background', palette.background);

  document.body.style.background = palette.background;
  select.style.background = `#fff url("${createChevron(color)}") no-repeat right 0.75rem center/12px 8px`;
}

function createChevron(hex) {
  const color = hex.replace('#', '%23');
  return `data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.59 0L6 4.58 1.41 0 0 1.41l6 6 6-6L10.59 0z' fill='${color}'/%3E%3C/svg%3E`;
}

select.addEventListener('change', (event) => {
  updateTheme(event.target.value);
});

updateTheme(select.value);
