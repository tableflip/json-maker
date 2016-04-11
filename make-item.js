module.exports = function (getImage, faker) {
  var couple = faker.fake("{{name.firstName('female')}} & {{name.firstName('male')}}")
  return {
    "name": faker.company.catchPhrase(),
    "description": faker.fake("{{commerce.product}} at {{address.city}}"),
    "couple": couple,
    "blurb": faker.lorem.paragraphs(4, '\n\n'),
    "quote": faker.lorem.sentences(3),
    "quoteFrom": couple + ' ' + faker.name.lastName(),
    "suppliers": Array(6).fill(0).map(function () {
      return faker.commerce.product() + ': ' + faker.company.companyName()
    }),
    "previewImage": getImage(),
    "leadImage": getImage(),
    "gridImage1": getImage(),
    "gridImage2": getImage(),
    "gridImage3": getImage(),
    "gridImage4": getImage(),
    "masonryImageTop": getImage(),
    "masonryImageLeft": getImage(),
    "masonryImageRight": getImage(),
    "masonryImageBottom": getImage(),
    "featured": false
  }
}
