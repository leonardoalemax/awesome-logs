
/**
 *	awesome-logs  - logs with colors and happiness!
 *  	developer by: @leualemax in 05/05/2016
 **/
/* eslint no-restricted-modules: ["error", "fs", "cluster"]  */
var colors = require('colors');
var padStart = require('lodash.padstart');

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
    return (type === "") ? "" : type;
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
  },
  getMoment: function() {
    var today = new Date();
    var dd = padStart(today.getDate(), 2, "0");
    var mm = padStart(today.getMonth() + 1, 2, "0");
    var hh = padStart(today.getHours(), 2, "0");
    var MM = padStart(today.getMinutes(), 2, "0");
    var SS = padStart(today.getSeconds(), 2, "0");
    var yyyy = padStart(today.getFullYear(), 4, "0");
    return dd + '/' + mm + '/' + yyyy + "-" + hh + ":" + MM + ":" + SS;
  }
};

var aLogs = {
  log: function(message, type) {
    var nType = utils.normalizeType(type);
    var color = utils.selectColor(nType);
    var prefix = utils.makePrefix(nType);
    console.log("[" + colors[color](prefix) + "]" +
                "[" + colors.cyan(utils.getMoment()) + "] " +
                      message);
  },
  success: function(message) {
    aLogs.log(message, 'success');
  },
  error: function(message) {
    aLogs.log(message, 'error');
  },
  fail: function(message) {
    aLogs.log(message, 'fail');
  },
  alert: function(message) {
    aLogs.log(message, 'alert');
  },
  info: function(message) {
    aLogs.log(message, 'info');
  },
  row: function() {
    console.log("--------------------------------------------------");
  }
};

module.exports = aLogs;
