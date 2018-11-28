import React from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog'

import styles from './styles'

export class DialogComponent extends React.Component{

  state = {
    loading: false,
    success: false,
    failure: false,
    title: ''
  }

  renderSuccess = () => (
    <View>
      <Text>Succes</Text>
      <Button title="Ok" onPress={this.props.onClose} />
    </View>
  )

  renderFailure = () => (
    <View>
      <Text>FAILURE</Text>
      <Button title="Ok" onPress={this.props.onClose} />
    </View>
  )

  renderLoading = () => (
    <ActivityIndicator size="large" color="0000ff" style={{alignSelf: 'center'}} />
  )

  setStateOfDialog = (state) => {
    this.setState({ ...state })
  }

  getRenderFunc = ({ loading, success, failure }, renderContent) => {
    let renderFn = renderContent(this.setStateOfDialog)
    if (loading) renderFn = this.renderLoading
    if (success) renderFn = this.renderSuccess
    if (failure) renderFn = this.renderFailure
    return renderFn
  }

  render() {
    const {
      visible,
      onClose,
      actions,
      title,
      children,
      renderContent,
      ...props
    } = this.props

    const renderFn = this.getRenderFunc(this.state, renderContent)

    return (
      <Dialog
        visible={visible}
        onTouchOutside={onClose}
        dialogTitle={<DialogTitle title={this.state.title || title} />}
        actions={actions ? actions.map(act => (
          <DialogButton {...act}/>
        )): []}
        {...props}
      >
        <DialogContent>
          <View style={styles.content}>
            {renderFn()}
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}
