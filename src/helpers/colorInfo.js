const tinycolor = require('tinycolor2')

const colorInfo = (color, name) => {
  const c = tinycolor(color)

  return {
    name,
    hex: c.toHexString(),
    darkContrast: c.isLight()
  }
}

module.exports = colorInfo
