# tstream
Sugar for creating basic [node.js stream.Transform](http://nodejs.org/api/stream.html#stream_class_stream_transform_1)s

# Install
    npm install jasonkuhrt/tstream

# Example
```js
var tstream = require('tstream');
var source = ...
var destination = ...

// Use tstream to power a tap stream factory
// which accepts a function for side-affects.
var tapStreamCreate = function(f, options){
  return new (tstream(function(chunk, encoding, done){
    f(chunk, encoding);
    this.push(chunk);
    done();
  }))(options);
};

// Profit.
source
.pipe(tapStream(console.log.bind(console)))
.pipe(destination)
```

# API
#### tstream(_transform, _flush)
> ```
@param _transform
  Function to use for the _transform method.
>
@param _flush (optional)
  Function to use for the _flush method.
  If none given _flush is a noop.
>
@return Class inherited from TransformStream
        using given _transform and _flush as methods
```