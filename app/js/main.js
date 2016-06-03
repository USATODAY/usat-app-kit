var jQuery = window.jQuery = require('jQuery');
var Analytics = require('./lib/analytics');
var app_config = require('../data/app_config.yml');



function onReady() {
    Analytics.setup('usat-interactive-' + app_config.app_slug + '-');
}

document.addEventListener('DOMContentLoaded', onReady);
