'use strict'

let Enum = function() {
  let self = this;
  let symbolToName = new Map();
  let names = new Set(arguments);
  
  if (names.size === 0) {
    throw "At least one value is expected";
  }
  
  if (names.size != arguments.length) {
    throw "Duplicate enum value names: " + 
      String.prototype.concat(Array.prototype.slice.call(arguments));
  }
  
  for(let name of names) {
      if (typeof name != 'string') throw "Name " + name.toString() + 
        ' is of type ' + typeof name + ' but string is expected';
      let sym = Symbol(name);

      Object.defineProperty(this, name, {
        enumerable: true,
        writable:false,
        configurable: false,
        value: sym
      });

      symbolToName.set(sym, name);
  }
  
  self.size = names.size;
  
  self.values = function() {
    let values = [];
    for(let value of symbolToName.keys()) {
      values.push(value);
    }
    return values
  }
  
  self.getName = function(sym) {
      if (typeof sym != 'symbol') throw "Argument " + sym.toString() + 
        ' is of type ' + typeof sym + ' but symbol is expected';
     if (!symbolToName.get(sym)) {
       throw "Can't find enum value for symbol " + sym.toString();
     }
     return symbolToName.get(sym);
  }

  self.toString = function() {
    let names = [];
    for(let name of symbolToName.values()) {
      names.push(name);
    }
    return String.prototype.concat(names);
  }
  
  Object.freeze(self);
}
