import { defineConfig } from 'dumi';

const path = require('path');
const fs = require('fs');
const _ = require('lodash');

function generateRoutes(targetPath) {
  let files = fs.readdirSync(targetPath);
  return _.reduce(
    files,
    (acc, item) => {
      if (/\d+[^\d]\.md$/.test(item)) {
        acc['/2021'].push({ title: item, path: `${item}` });
      }
      return acc;
    },
    { '/2021': [] },
  );
}

export default defineConfig({
  base: '/irregular-note/',
  publicPath: '/irregular-note/',
  mode: 'site',
  dynamicImport: {},
  title: '兑刊',
  logo: '/images/logo.svg',
  // navs: [null],
  theme: {
    '@primary-color': '#a0d911',
  },
});
