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

// replace a file with its base64 version
b64File.encode('foo.txt', function(error){
  if(error){
    console.log(error);
    return;
  }
  
  // if file content was 'foo', now it's 'Zm9v'
  console.log('file was encoded and overwritten');
});

// replace a base64 encoded file with its decoded version
b64File.decode('foo.txt', function(error){
  if(error){
    console.log(error);
    return;
  }
  
  // if file content was 'Zm9v', now it's 'foo'
  console.log('file was decoded and overwritten');
});
```


## License ##

MIT. See [LICENSE.md](http://github.com/AndersonMamede/base64-file-encoder/blob/master/LICENSE.md) for details.
