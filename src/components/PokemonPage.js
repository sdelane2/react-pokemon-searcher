import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: []
  }

  submitFormHandler = (newPokemonObject)=>{
    // this.setState({pokemon: [...this.state.pokemon, newPokemonObject]})
    const newObject = {
      name: newPokemonObject.name,
      hp: newPokemonObject.hp,
      sprites: {
        front: newPokemonObject.front,
        back: newPokemonObject.back
      }
    }
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(newObject)
    })
    .then(response => response.json())
    .then(newPokemon => this.setState({pokemon: [...this.state.pokemon, newPokemon]}))
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(data => {
      this.setState({pokemon: data})
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitFormHandler={this.submitFormHandler}/>
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
