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
  theme: {
    '@primary-color': '#a0d911',
  },
  styles: [
    `.__dumi-default-navbar-logo { pointer-events: none; } nav > span { display: none !important; }`,
  ],
});
