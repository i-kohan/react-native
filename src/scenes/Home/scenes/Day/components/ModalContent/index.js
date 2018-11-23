import React from 'react'
import { Modal, Text, Button } from 'react-native'

export const ModalContent = ({ isModalVisible }) => {
  console.log(isModalVisible)
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => 1}
    >
      <Text>Hello</Text>
      <Button
        onPress={() => console.log('hello')}
        title="Close modal"
      />
    </Modal>
  )
}
