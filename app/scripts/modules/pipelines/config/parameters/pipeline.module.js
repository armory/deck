'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.pipelines.parameters', [
  require('./parameter.js'),
  require('./parameters.directive.js'),
]).name;
