"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api_v = require("./api_v1");

var _api_v2 = _interopRequireDefault(_api_v);

var _page = require("./page");

var _page2 = _interopRequireDefault(_page);

var _signin = require("./signin");

var _signin2 = _interopRequireDefault(_signin);

var _search = require("./search");

var _search2 = _interopRequireDefault(_search);

var _wheelSearch = require("./wheelSearch");

var _wheelSearch2 = _interopRequireDefault(_wheelSearch);

var _searchMovie = require("./searchMovie");

var _searchMovie2 = _interopRequireDefault(_searchMovie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * Entry point for all routes
 *
 */

exports.default = {
  api_v1: _api_v2.default,
  signin: _signin2.default,
  page: _page2.default,
  search: _search2.default,
  wheelSearch: _wheelSearch2.default,
  searchMovie: _searchMovie2.default
};
//# sourceMappingURL=index.js.map