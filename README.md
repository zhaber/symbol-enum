# Javascript Enum

An enum data type that is based on the javascript [symbol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol) primitive type. Using symbol values ensures type safety of the enum as each symbol value is guaranteed by javascript to be unique.

Example:
```javascript
const color = new Enum('RED', 'BLUE')

color.RED.toString() // 'Symbol(RED)'
color.getName(color.RED) // 'RED'
color.size // 2
color.values() // Symbol(RED), Symbol(BLUE)
color.toString() // 'RED,BLUE'
color.valueOf('RED') // Symbol(RED)
```

[Plunker demo](http://plnkr.co/edit/2RjZuQ1LNl8UI6nMlbOk?p=preview)
