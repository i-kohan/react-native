import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import t from 'tcomb-form-native'


const Exercise = t.struct({
  title: t.String,
  description: t.String,
  imageURL: t.String,
  icon: t.String
})

const Form = t.form.Form

class AddExerciseForm extends React.Component {

  state = {
    title: '',
    description: '',
    imageURL: 'http://piotrowicz.net/wp-content/uploads/2018/08/leg-day.png',
    icon: 'http://steelsports.ru/wp-content/uploads/2014/09/56.jpg'
  }

  handleSubmit = () => {
    const value = this._form.getValue()
    if (value) {
      this.props.onSubmit(value)
    }
  }

  render() {
    return (
      <View style={styles.container}>        
        <Form 
          ref={ref => this._form = ref}
          value={this.state}
          type={Exercise}
        />
        <Button title="Create" onPress={this.handleSubmit}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  }
})

export default AddExerciseForm
