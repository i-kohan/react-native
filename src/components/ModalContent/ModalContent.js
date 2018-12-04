import React from 'react'
import { Modal, Button } from 'react-native'
import { Header, Icon } from 'react-native-elements'

const DEFAULT_TITLE = 'MODAL'

const ModalContent = ({ visible, onClose, children, title }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <Header
        rightComponent={
          <Icon
            onPress={onClose}
            type='font-awesome'
            name='times'
          />
        }
        centerComponent={{text: title || DEFAULT_TITLE, style: { alignSelf: 'center' }}}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          height: 50
        }}
      />
      {children}
    </Modal>
  )
}

export default ModalContent
