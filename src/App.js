import React, { Component } from 'react'

import axios from 'axios'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ColorPicker from './components/color-picker/ColorPicker'
// import ModalColorPicker from './components/modal-color-picker/ModalColorPicker'

import {
  constantinColors,
  traditionalColors
} from './helpers/computeColors'

import './app.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      selectedColor:'#8D00FF',
      paletteOne: [],
      paletteTwo: [],
      apiResponse: null
    }
  }

  componentDidMount () {
    this._computeColors('8D00FF')
  }

  _replaceColor (withValue, index) {

  }

  async _sendPalette (selectedPalette) {
    // return null
    try {
      if (!selectedPalette) {
        throw TypeError('No has seleccionado una paleta')
      }

      const cssFilePromise = axios.post('http://localhost:4205/palette', { palette: selectedPalette })
      const response = await cssFilePromise.data

      this.setState({ apiResponse: response })
    } catch (err) {
      throw err.message
    }
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
        <h1>{ this.state.apiResponse }</h1>
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
            <Paper className="palette-container">
              <Button
                variant="contained"
                className="export-button"
                style={ { backgroundColor: selectedColor } }
                onClick={ () => this._sendPalette(paletteOne) }
              >
                Generar esta paleta
              </Button>
              <List>
                { colorPalleteOne }
              </List>
            </Paper>
          </Grid>
          <Grid item sm={12} xs={12} md={6}>
            <Paper className="palette-container">
              <Button
                variant="contained"
                className="export-button"
                style={ { backgroundColor: selectedColor } }
                onClick={ () => this._sendPalette(paletteTwo) }
              >
                Generar esta paleta
              </Button>
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

export default App
