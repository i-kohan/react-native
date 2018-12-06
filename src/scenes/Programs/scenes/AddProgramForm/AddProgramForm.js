import React from 'react'
import { View, Button } from 'react-native'
import t from 'tcomb-form-native'


const Program = t.struct({
  title: t.String,
  description: t.String,
  imageURL: t.String
})

const Form = t.form.Form

class AddProgramForm extends React.Component {

  state = {
    title: '',
    description: '',
    imageURL: 'http://piotrowicz.net/wp-content/uploads/2018/08/leg-day.png'
  }

  handleSubmit = () => {
    const value = this._form.getValue()
    if (value) {
      this.props.onSubmit(value)
    }
  }

  render() {
    return (
      <View>
        <Form 
          ref={ref => this._form = ref}
          value={this.state}
          type={Program}
        />
        <Button title="Create" onPress={this.handleSubmit}/>
      </View>
    )
  }
}

export default AddProgramForm
