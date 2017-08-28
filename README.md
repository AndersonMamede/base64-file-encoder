base64-file-encoder
================
> base64 encode and/or decode a file and save it to disk


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

// base64 encodes the contents of foo.txt and outputs it to bar.txt
b64File.encode('foo.txt', 'bar.txt', function(error){
  if(error){
    console.log(error);
    return;
  }
  
  // if foo.txt content was 'foo', bar.txt content will be 'Zm9v'
  console.log('file was encoded');
});

// base64 encodes the contents of foo.txt and outputs it to the same file (i.e. overwrites it)
b64File.encode('foo.txt', null, function(error){
  if(!error){
    consolelog('file was encoded and overwritten');
  }
});

// base64 decodes the contents of bar.txt and outputs it to foo.txt
b64File.decode('bar.txt', 'foo.txt', function(error){
  if(error){
    console.log(error);
    return;
  }
  
  // if bar.txt content was 'Zm9v', foo.txt content will be 'foo'
  console.log('file was decoded');
});

// base64 decodes the contents of bar.txt and outputs it to the same file (i.e. overwrites it)
b64File.encode('bar.txt', null, function(error){
  if(!error){
    consolelog('file was decoded and overwritten');
  }
});
```


## API

### encode(inputFilePath, [outputFilePath], [callback])

Base64 encodes the contents of a file and outputs it to another file ($outputFilePath) or to the same file (if outputPath is not provided). Both outputFilePath and callback are optional.

### decode(inputFilePath, [outputFilePath], [callback])

Decodes the contents of a base64 encoded file and outputs it to another file ($outputFilePath) or to the same file (if outputPath is not provided). Both outputFilePath and callback are optional.


## License ##

MIT. See [LICENSE.md](http://github.com/AndersonMamede/base64-file-encoder/blob/master/LICENSE) for details.
