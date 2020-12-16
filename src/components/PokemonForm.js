import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: 0,
    front: "",
    back: ""
  
  }

  inputChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  localFormHandler = (event) => {
    event.preventDefault()
    this.props.submitFormHandler(this.state)
    event.target.reset()
  }
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localFormHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.inputChangeHandler} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.inputChangeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="front" onChange={this.inputChangeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="back" onChange={this.inputChangeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
