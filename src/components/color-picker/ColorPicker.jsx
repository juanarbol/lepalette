import React from 'react'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      background: this.props.color
    }
  }

  _handleColorPickerChange (color) {
    this.setState({ background: color.hex })
    this.props.onChange(this.state.background)
  }

  render () {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ color => this._handleColorPickerChange(color) }
      />
    )
  }
}

export default ColorPicker
