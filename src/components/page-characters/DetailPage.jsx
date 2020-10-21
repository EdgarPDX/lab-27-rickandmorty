import React, { Component } from 'react';
import { getCharacter } from '../../services/rickandmorty-api';


export default class DetailPage extends Component {
    state = {
        character:{}
    }

    componentDidMount = async() => {    
        getCharacter(this.props.match.params.id)
      .then(character => this.setState({ character }));

      
      };

     
    render() {
        return (
            <div>
                <h2>{this.state.character.name}</h2>
                <img src={this.state.character.image}/>
                <h3>Species: {this.state.character.species}</h3>
                <h3>Location: {this.state.character.location?.name}</h3>
            </div>
        )
    }
}
