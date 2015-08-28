```javascript
var possible = require('possible-objects')
```

The package exports a single function. That function takes a single argument: An `Object` schema whose property values are all `Array`s of possible object property values.

The function returns an `Array` of all the `Objects` whose properties have values permitted by the schema.

```javascript
var assert = require('assert')
assert.deepEqual(
  possible({
      a: [1, 2],
      b: [3, 4] }),
  [ { a: 1, b: 3 },
    { a: 1, b: 4 },
    { a: 2, b: 3 },
    { a: 2, b: 4 } ])
```
