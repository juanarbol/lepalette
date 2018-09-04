const tinycolor = require('tinycolor2')

const multiplyColors = (rgb1, rgb2) => {
  const rgbColor = {}

  rgbColor.r = Math.floor(rgb1.r * rgb2.r / 255)
  rgbColor.g = Math.floor(rgb1.g * rgb2.g / 255)
  rgbColor.b = Math.floor(rgb1.b * rgb2.b / 255)

  return tinycolor(`rgb ${rgbColor.r} ${rgbColor.g} ${rgbColor.b}`)
}

module.exports = multiplyColors
