var product = require('cartesian-product')

function possibleObjects(schema) {
  var sets = Object.keys(schema)
    .map(function(key) {
      var values = schema[key]
      return values.map(function(value) {
        return [ key, value ] }) })
  return product(sets)
    .map(function(pairs) {
      var object = { }
      pairs.forEach(function(pair) {
        object[pair[0]] = pair[1] })
      return object }) }

module.exports = possibleObjects
