![npm](https://img.shields.io/npm/dt/base64-file-encoder.svg?style=flat-square)
![Hits](https://hitt.herokuapp.com/AndersonMamede/base64-file-encoder.svg)

base64-file-encoder
================
> [A Node.js module](https://www.npmjs.com/package/base64-file-encoder) to base64 encode/decode a file and save it to disk


[![NPM](https://nodei.co/npm/base64-file-encoder.png?downloads=true&stars=true)](https://www.npmjs.com/package/base64-file-encoder)

Installation
------------

Install with `npm`:

``` bash
$ npm install base64-file-encoder --save
```


Example
-------

``` js
const b64File = require('base64-file-encoder');


// base64 encodes the content of foo.txt and outputs it to bar.txt
b64File.encode('foo.txt', 'bar.txt')
  .then(function(){
    // if foo.txt content was 'foo', bar.txt content will be 'Zm9v'
    console.log('file was encoded');
  })
  .catch(function(error){
    console.log(error);
  });


// base64 encodes the content of foo.txt and outputs it to the same
// file (i.e. overwrites it)
b64File.encode('foo.txt')
  .then(function(){
    console.log('file was encoded and overwritten');
  })
  .catch(function(error){
    console.log(error);
  });


// base64 decodes the content of bar.txt and outputs it to foo.txt
b64File.decode('bar.txt', 'foo.txt')
  .then(function(){
    // if bar.txt content was 'Zm9v', foo.txt content will be 'foo'
    console.log('file was decoded');
  })
  .catch(function(error){
    console.log(error);
  });


// base64 decodes the content of bar.txt and outputs it to the same
// file (i.e. overwrites it)
b64File.decode('bar.txt')
  .then(function(){
    console.log('file was decoded and overwritten');
  })
  .catch(function(error){
    console.log(error);
  });
```


## API

### encode(inputFilePath, [outputFilePath], [callback])

Base64 encodes the contents of a file and outputs it to another file ($outputFilePath) or to the same file (if outputPath is not provided). Both outputFilePath and callback are optional.
This function returns a promise. For the sake of backward compatibility, this function also accepts a callback as third parameter.

### decode(inputFilePath, [outputFilePath], [callback])

Decodes the contents of a base64 encoded file and outputs it to another file ($outputFilePath) or to the same file (if outputPath is not provided). Both outputFilePath and callback are optional.
This function returns a promise. For the sake of backward compatibility, this function also accepts a callback as third parameter.


## License ##

MIT. See [LICENSE.md](http://github.com/AndersonMamede/base64-file-encoder/blob/master/LICENSE) for details.
