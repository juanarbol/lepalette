import React from 'react'

import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import ColorPicker from '../color-picker/ColorPicker'

class ModalColorPicker extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }

    this._handleClose = this._handleClose.bind(this)
    this._handleColorPicker = this._handleColorPicker.bind(this)
  }

  _handleClose () {
    this.setState({ open: !this.state.open })
  }

  _handleColorPicker (color) {
    console.info(color)
  }

  render () {
    return (
      <div>
        <Button onClick={this._handleClose}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
        >
          <div>
            <Typography variant="title">
              Text in a modal
            </Typography>
            <Typography variant="subheading">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <ColorPicker onChange={ e => this._handleColorPicker(e) } />
          </div>
        </Modal>
      </div>
    )
  }
}

export default ModalColorPicker
