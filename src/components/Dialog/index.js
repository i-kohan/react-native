import React from 'react'
import { View } from 'react-native'
import Dialog, { DialogContent, DialogTitle, DialogButton } from 'react-native-popup-dialog'

import styles from './styles'

export const DialogComponent = ({ visible, onClose, title, actions, children, ...props }) => {
  return (
    <Dialog
      visible={visible}
      onTouchOutside={onClose}
      dialogTitle={<DialogTitle title={title} />}
      actions={actions ? actions.map(act => (
        <DialogButton {...act}/>
      )): []}
      {...props}
    >
      <DialogContent>
        <View style={styles.content}>
          {children}
        </View>
      </DialogContent>
    </Dialog>
  )
}
