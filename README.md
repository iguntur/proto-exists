# proto-exists [![Build Status](https://travis-ci.org/iguntur/proto-exists.svg?branch=master)](https://travis-ci.org/iguntur/proto-exists)

> Check if prototype exists and prototype is a function


## Install

```
$ npm install --save proto-exists
```


## Usage

```js
const protoExists = require('proto-exists');

class Foo {
    constructor() {
        this.bar = '⚛';
        this.barQuux = () => '⚇';
    }
    baz() {
        return this.bar;
    }
    get getter() {
        return this.bar;
    }
    set setter(input) {
        this.bar = input;
    }
}

// returns true
protoExists(Foo, 'baz');
protoExists(new Foo(), 'baz');

// returns false
protoExists(Foo, 'notExists');
protoExists(Foo, 'barQuux');
protoExists(Foo, 'bar');
protoExists(Foo, 'getter');
protoExists(Foo, 'setter');
protoExists(new Foo(), 'notExists');
protoExists(new Foo(), 'bar');
```


## API

### protoExists(construct, name)

Returns a boolean value.

#### construct

Type: `<Function>`, `<Object>`

A constructor function.


#### name

Type: `string`

The prototype name of constructor.


## License

MIT © [Guntur Poetra](http://iguntur.starmediateknik.com)
