import React from 'react'
import { Modal, Text, Button } from 'react-native'

export const ModalContent = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Text>Hello</Text>
      <Button
        onPress={onClose}
        title="Close modal"
      />
    </Modal>
  )
}
