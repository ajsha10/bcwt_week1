const express = require('express');
const lodash = require('lodash');

console.log('This is JavaScript and node');

const s = 'Foo Bar';

const newS = lodash().camelCase(s);
console.log(newS);

