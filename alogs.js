
/**
 *	awesome-logs  - logs with colors and happiness!
 *  	developer by: @leualemax in 05/05/2016
 **/
/* eslint no-restricted-modules: ["error", "fs", "cluster"]  */
var colors = require('colors');

var utils = {
  normalizeType: function(type) {
    var nType = type.toUpperCase().trim();
    return (nType === "SUCCESS" ||
       nType === "ERROR" ||
       nType === "FAIL" ||
       nType === "ALERT" ||
       nType === "INFO") ? nType : "";
  },
  makePrefix: function(type) {
    return (type === "") ? "" : "[" + type + "]";
  },
  selectColor: function(type) {
    switch (type) {
      case "SUCCESS":
        return "green";
      case "ERROR":
        return "red";
      case "FAIL":
        return "magenta";
      case "ALERT":
        return "yellow";
      case "INFO":
        return "blue";
      default:
        return "white";
    }
  }
};

var aLogs = {
  log: function(message, type) {
    var nType = utils.normalizeType(type);
    var color = utils.selectColor(nType);
    var prefix = utils.makePrefix(nType);
    console.log(colors[color](prefix) + " - " + message);
  }
};

module.exports = aLogs;
