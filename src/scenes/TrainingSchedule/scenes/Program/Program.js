import React from 'react'
import { View } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

import { Program } from '../../../../components'

class TSProgram extends React.Component {
  render() {
    const {
      program,
    } = this.props

    return (
      <View style={{marginTop: 20}}>
        <Program {...program}/>
      </View>
    )
  }
}

export default TSProgram
