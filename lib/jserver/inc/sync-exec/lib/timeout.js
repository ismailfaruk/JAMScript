// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = function(limit, msg) {
    if (Date.now() > limit) {
      throw new Error(msg);
    }
  };

}).call(this);