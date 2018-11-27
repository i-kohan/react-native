import React from 'react'
import { View, Text, Image, ActivityIndicator, Button } from 'react-native'
import { connect } from 'react-redux'

import { getPrograms, getLoading } from './redux/selectors'
import { init } from './redux/actions'

import { ProgramsList, Modal } from '../../components'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';

import styles from './styles'

const mapStateToProps = state => ({
  programs: getPrograms(state),
  loading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(init)
})

class Programs extends React.Component {

  componentDidMount() {
    this.props.init()
    console.log(this.props)
  }
  // Actions.refresh({ renderRightButton: this.renderRightButton })

  // renderRightButton = () => (
  //   <Icon name='list-ul' type='font-awesome' onPress={() => console.log} />
  // )

  routeToProgram = (program) => () => {
    Actions.program({ program, title: program.title })
  }

  render() {
    const {
      programs,
      loading
    } = this.props

    return (
      <View style={styles.programs}>
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          <ProgramsList options={programs} onClick={this.routeToProgram}/>
        )}
      </View>
    )
  }
}

export const ProgramsScene = connect(mapStateToProps, mapDispatchToProps)(Programs)
