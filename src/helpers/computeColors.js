const tinycolor = require('tinycolor2')

const getColorInfo = require('./colorInfo')
const multiplyColor = require('./multiplyColor')

const constantinColors = hex => {

  const baseLight = tinycolor('#ffffff');
  const baseDark = multiplyColor(tinycolor(hex).toRgb(), tinycolor(hex).toRgb());
  const baseTriad = tinycolor(hex).tetrad();

  return [
    getColorInfo(tinycolor.mix(baseLight, hex, 12), '50'),
    getColorInfo(tinycolor.mix(baseLight, hex, 30), '100'),
    getColorInfo(tinycolor.mix(baseLight, hex, 50), '200'),
    getColorInfo(tinycolor.mix(baseLight, hex, 70), '300'),
    getColorInfo(tinycolor.mix(baseLight, hex, 85), '400'),
    getColorInfo(tinycolor.mix(baseLight, hex, 100), '500'),
    getColorInfo(tinycolor.mix(baseDark, hex, 87), '600'),
    getColorInfo(tinycolor.mix(baseDark, hex, 70), '700'),
    getColorInfo(tinycolor.mix(baseDark, hex, 54), '800'),
    getColorInfo(tinycolor.mix(baseDark, hex, 25), '900'),
    getColorInfo(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65), 'A100'),
    getColorInfo(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55), 'A200'),
    getColorInfo(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45), 'A400'),
    getColorInfo(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40), 'A700')
  ]
}

const traditionalColors = hex => [
  getColorInfo(tinycolor(hex).lighten(37), '100'),
  getColorInfo(tinycolor(hex).lighten(52), '50'),
  getColorInfo(tinycolor(hex).lighten(26), '200'),
  getColorInfo(tinycolor(hex).lighten(12), '300'),
  getColorInfo(tinycolor(hex).lighten(6), '400'),
  getColorInfo(tinycolor(hex), '500'),
  getColorInfo(tinycolor(hex).darken(6), '600'),
  getColorInfo(tinycolor(hex).darken(12), '700'),
  getColorInfo(tinycolor(hex).darken(18), '800'),
  getColorInfo(tinycolor(hex).darken(24), '900'),
  getColorInfo(tinycolor(hex).lighten(50).saturate(30), 'A100'),
  getColorInfo(tinycolor(hex).lighten(30).saturate(30), 'A200'),
  getColorInfo(tinycolor(hex).lighten(10).saturate(15), 'A400'),
  getColorInfo(tinycolor(hex).lighten(5).saturate(5), 'A700')
]


module.exports = {
  constantinColors,
  traditionalColors
}
