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
    imageURL: 'https://www.freeiconspng.com/uploads/-expander-fitness-trainer-fitness-room-gym-gymnastic-health-512-17.png'
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    this.props.onSubmit(value)
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
