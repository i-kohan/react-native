import React from 'react'
import { Modal, Text, Button } from 'react-native'

export const ModalContent = ({ visible, onClose, children }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {children}
      <Button
        onPress={onClose}
        title="Close modal"
      />
    </Modal>
  )
}
