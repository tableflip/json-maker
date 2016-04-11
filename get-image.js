var googleImages = require('google-images')
var flatten = require('array-flatten')
var config = require('config')
var imageClient = googleImages(config.cseId, config.apiKey)

function randomInt (n) {
	return Math.floor(Math.random() * n)
}

module.exports = function (subject, pages, cb) {
	var imagePromises = new Array(pages).fill(0).map(function (ignore, index) {
		return imageClient.search(subject, { page: index })
	})
	Promise.all(imagePromises)
		.then(function (imagesArray) {
			var masterImages = flatten(imagesArray)
			var images = masterImages.slice(0)
	    cb(null, function () {
				if (!images.length) images = masterImages.slice(0)
	      return images.splice(randomInt(images.length), 1)[0].url
	    })
		}).catch(function (e) {
	    cb(e)
	  })
}
