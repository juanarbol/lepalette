import React, { Component } from 'react'

import ColorPicker from './components/color-picker/ColorPicker'

import {
  constantinColors,
  traditionalColors
} from './helpers/computeColors'


class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedColor:'#fff',
      info: null,
      info2: null
    }
  }

  _handleColorChange (selectedColor) {
    this.setState({ selectedColor })
    this._computeColors(selectedColor)
  }

  _computeColors (hex) {
    const colors = constantinColors(hex)
    const colors2 = traditionalColors(hex)
    this.setState({ info: colors, info2: colors2 })
  }

  render() {
    const info = this.state.info
    const info2 = this.state.info2
    const color = this.state.selectedColor

    const cs = info ? info.map(number =>
      <li style={ Object.assign({}, { backgroundColor: number.hex }) } > {number.name} {number.hex}</li>
    ) : null

    const cs2 = info2 ? info2.map(number =>
      <li style={ Object.assign({}, { backgroundColor: number.hex }) } > {number.name} {number.hex}</li>
    ) : null

    return (
      <div>
        <h1 style={ Object.assign({}, { color }) } >Le Palette</h1>
        <ColorPicker
          color={ color }
          onChange={ (e) =>  this._handleColorChange(e) }
        />
        <ul>
          { cs }
        </ul>
        <ul>
          { cs2 }
        </ul>
      </div>
    )
  }
}

export default App;
