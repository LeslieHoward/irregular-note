import { defineConfig } from 'dumi';
import { traverse } from './helper';

const path = require('path');
const sidebar = traverse(path.resolve(__dirname, 'docs'));

export default defineConfig({
  base: '/irregular-note/',
  publicPath: '/irregular-note/',
  themeConfig: {
    name: '观刊',
    logo: '/irregular-note/images/logo.svg',
    sidebar: [sidebar],
    footer: '<div style="height:20px;" />',
    nav: [
      {
        title: 'GitHub',
        link: 'https://github.com/LeslieHoward/irregular-note',
      },
    ],
  },
  favicons: ['/irregular-note/images/logo.ico'],
  styles: [
    `main .dumi-default-sidebar { width: 220px; } .dumi-default-content img { max-width: 100%; }`,
  ],
  mfsu: false,
});
