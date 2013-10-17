var Transform_Stream = require('stream').Transform
var inherits = require('util').inherits
var noop = function(){}



module.exports = function(_transform, _flush){

  inherits(TS, Transform_Stream);

  function TS(){
    Transform_Stream.apply(this, arguments);
  };

  TS.prototype._flush = _flush || noop;

  TS.prototype._transform = _transform;

  return TS;
};