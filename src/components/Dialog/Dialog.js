import React from 'react'
import { View, ActivityIndicator, Text, Button } from 'react-native'
import Dialog, { DialogContent, DialogTitle, DialogButton, SlideAnimation } from 'react-native-popup-dialog'

import styles from './styles'

export default class DialogComponent extends React.Component{
  renderSuccess = () => (
    <View>
      <Text>Success</Text>
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

  getRenderFunc = ({ loading, success, failure }, renderContent) => {
    let renderFn = renderContent || null
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
      loading,
      success,
      failure,
      ...props
    } = this.props

    const renderFn = this.getRenderFunc({ loading, success, failure }, renderContent)

    return (
      <Dialog
        animationDuration={0}
        visible={visible}
        hasOverlay
        onTouchOutside={onClose}
        dialogTitle={<DialogTitle title={title} />}
        actions={actions ? actions.map(act => (
          <DialogButton {...act}/>
        )): []}
        {...props}
      >
        <DialogContent >
          <View style={styles.content}>
            {renderFn && renderFn()}
          </View>
        </DialogContent>
      </Dialog>
    )
  }
}
