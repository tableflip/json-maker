var fs = require('fs')
var faker = require('faker')
var config = require('config')
var imageGetter = require('./get-image')
var makeItem = require('./make-item')

if (!process.argv[3]) return console.error('You must supply a number of docs and an output file')

var outFile = process.argv[3]
var itemCount = parseInt(process.argv[2], 10)

var makeFakeData = function (err, getImage) {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  fs.writeFileSync(outFile, JSON.stringify(new Array(itemCount).fill(0).map(function () {
    var data = makeItem(getImage, faker)
    return data
  }), null, 2))
  console.log('Done!')
  process.exit(0)
}

imageGetter(config.searchTerm, itemCount, makeFakeData)
