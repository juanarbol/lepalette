import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ColorPicker from './components/color-picker/ColorPicker'
import ModalColorPicker from './components/modal-color-picker/ModalColorPicker'

import {
  constantinColors,
  traditionalColors
} from './helpers/computeColors'

import './app.scss'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedColor:'#8D00FF',
      paletteOne: [],
      paletteTwo: []
    }
  }

  componentDidMount () {
    this._computeColors('8D00FF')
  }

  _replaceColor (withValue, index) {

  }

  _handleColorChange (selectedColor) {
    this.setState({ selectedColor })
    this._computeColors(selectedColor)
  }

  _computeColors (hex) {
    const paletteOne = constantinColors(hex)
    const paletteTwo = traditionalColors(hex)

    this.setState({ paletteOne, paletteTwo })
  }

  render() {
    const {
      paletteOne,
      paletteTwo,
      selectedColor
    } = this.state

    const colorPalleteOne = paletteOne.map((color, index) =>
      <ListItem
        style={ Object.assign({}, { backgroundColor: color.hex }) }
        key={index}
      >
        {color.name} {color.hex}
      </ListItem>
    )

    const colorPalleteTwo = paletteTwo.map((color, index) =>
      <ListItem
        style={ Object.assign({}, { backgroundColor: color.hex }) }
        key={index}
      >
        {color.name} {color.hex}
      </ListItem>
    )

    return (
      <div className="root-container">
        <Grid
          container
          alignItems="center"
          direction="column"
          justify="center"
          spacing={24}
        >
          <Grid item xs={12}>
            <Typography
              variant="title"
              gutterBottom
              style={ Object.assign({}, { color: selectedColor }) }
            >
              Le Palette
            </Typography>
            <Paper>
              <ColorPicker
                color={ selectedColor }
                onChange={ e => this._handleColorChange(e) }
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="center"
          spacing={24}
        >
          <Grid item sm={12} xs={12} md={6}>
            <Paper>
              <List>
                { colorPalleteOne }
              </List>
            </Paper>
          </Grid>
          <Grid item sm={12} xs={12} md={6}>
            <Paper>
              <List>
                { colorPalleteTwo }
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App;
