import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import * as selectors from './redux/selectors'
import * as actions from './redux/actions'

import { List, TouchableIcon, ModalContent } from '../../components'
import { AddProgramForm } from './scenes'

import styles from './styles'

const mapStateToProps = state => ({
  programs: selectors.getPrograms(state),
  loading: selectors.getLoading(state),
  modalVisible: selectors.getModalVisibility(state)
})

const mapDispatchToProps = dispatch => ({
  init: () => dispatch(actions.init),
  modalClose: () => dispatch(actions.modalClose),
  modalOpen: () => dispatch(actions.modalOpen)
})

class Programs extends React.Component {

  componentDidMount() {
    this.props.init()
    this.props.navigation.setParams({ addProgram: this.props.modalOpen })
  }

  routeToProgram = (program) => () => {
    Actions.Pprogram({ program, title: program.title })
  }

  renderIcons = (item) => () => (
    <View style={styles.icons}>
      <TouchableIcon
        style={styles.iconGoTo}
        iconSize={15}
        iconName='chevron-right'
        onClick={this.routeToProgram(item)}
      />
    </View>
  )

  render() {
    const {
      programs,
      loading,
      modalVisible,
      modalClose
    } = this.props

    return (
      <View style={styles.programs}>
        {loading ? (
          <ActivityIndicator size="large" color="0000ff" />
        ) : (
          <List
            options={programs}
            onClick={() => null}
            noDataMessage={'No available programs'}
            renderIcons={this.renderIcons}
          />
        )}
        <ModalContent 
          visible={modalVisible}
          onClose={modalClose}
        >
          <AddProgramForm />
        </ModalContent>
      </View>
    )
  }
}

export const ProgramsScene = connect(mapStateToProps, mapDispatchToProps)(Programs)
