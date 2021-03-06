import { defineConfig } from 'dumi';
import { traverse } from './util';

const path = require('path');
const menus = traverse(path.resolve(__dirname, 'docs'));

export default defineConfig({
  base: '/irregular-note',
  publicPath: '/irregular-note/',
  mode: 'site',
  dynamicImport: {},
  resolve: {
    includes: ['docs'],
  },
  title: '兑刊',
  logo: '/irregular-note/images/logo.svg',
  favicon: '/irregular-note/images/logo.ico',
  menus: menus,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/LeslieHoward/irregular-note',
    },
  ],
  theme: {
    '@primary-color': '#a0d911',
  },
  styles: [
    `
    .__dumi-default-navbar-logo { pointer-events: none; }
    .__dumi-default-search > ul { left: auto!important; right: 0; }
    nav > span:nth-of-type(1) { display: none!important; }
    `,
  ],
});
