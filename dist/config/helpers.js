"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var path = require("path");

// Helper functions
function root(args) {
  var _ref;

  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, (_ref = [__dirname]).concat.apply(_ref, ["../"].concat(_toConsumableArray(args))));
}

exports.root = root;
//# sourceMappingURL=helpers.js.map