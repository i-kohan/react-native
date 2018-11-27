import React from 'react'
import { View, Text, Image, ActivityIndicator, Button } from 'react-native'
import { connect } from 'react-redux'

import { getPrograms, getLoading } from './redux/selectors'
import { init } from './redux/actions'

import { ProgramsList, Modal } from '../../components'
import { Actions } from 'react-native-router-flux';
import { ModalContent } from '../Home/scenes/Day/components';

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
  }

  routeToProgram = (id) => () => {
    Actions.program({ id })
  }

  render() {
    const {
      programs,
      loading
    } = this.props

    return (
      <View>
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          // <ModalContent>          
            <ProgramsList options={programs} onClick={this.routeToProgram}/>
          // </ModalContent>
        )}
        <Button title="Go to program" onPress={() => null}/>
      </View>
    )
  }
}

export const ProgramsScene = connect(mapStateToProps, mapDispatchToProps)(Programs)
