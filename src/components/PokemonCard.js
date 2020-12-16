import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    beenClicked: false
    }

  localClickHandler = () => {
    this.setState({beenClicked: !this.state.beenClicked})
  }


  render() {

    const { pokemonObject } = this.props


    return (
      <Card onClick={this.localClickHandler}>
        <div>
          <div className="image">
            <img src={
              this.state.beenClicked
              ? pokemonObject.sprites.front
              : pokemonObject.sprites.back} />
            {/* <img alt="oh no!"/> */}
          </div>
          <div className="content">
            <div className="header">{pokemonObject.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonObject.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
