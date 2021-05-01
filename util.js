const path = require('path');
const fs = require('fs');
const _ = require('lodash');

export function joinPath(main, sub) {
  return _.chain(main)
    .split('/')
    .push(sub)
    .join('/')
    .value();
}

export function sort(target) {
  return _.chain(target)
    .sortBy(value => {
      const name = path.basename(value, '.md');
      return _.toNumber(name);
    })
    .reverse()
    .value();
}

export function traverse(targetPath) {
  const accumulation = [];
  const loop = function(targetPath, prevPaths = '') {
    const files = fs.readdirSync(targetPath);
    _.forEach(files, item => {
      const filePath = path.resolve(targetPath, item);
      const isDirectory = fs.lstatSync(filePath).isDirectory();
      const currentPath = joinPath(prevPaths, item);

      if (isDirectory) {
        loop(filePath, currentPath);
      } else {
        accumulation.push(currentPath);
      }
    });
  };

  loop(targetPath);

  return { '/notes': [{ title: 'notes', children: sort(accumulation) }] };
}
