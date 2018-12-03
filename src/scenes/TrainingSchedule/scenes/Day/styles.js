import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  containter: {
    width: '100%',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  confirmButtons: {
    flexDirection: "row",
    marginTop: 'auto',
    alignSelf: 'flex-end'
  },
  icons: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    flexDirection: 'row',
  },
  iconGoTo: {
    backgroundColor: 'mediumseagreen',
  },
  iconRemove: {
    backgroundColor: "tomato"
  }
})
