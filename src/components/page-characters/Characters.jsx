import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../services/rickandmorty-api';

export default class Characters extends Component {
    state = {
        characters: []
    }

    componentDidMount = () => {    
        getCharacters()
      .then(characters => this.setState({ characters }));
      };

    render() {
        return (
          
        <ul>
          {
            this.state.characters.map((character) => {
              return <li key={character.id}>
                     <Link to={`/detail/${character.id}`}>
                        <h2>{character.name}</h2>
                        <img src={character.image}/>
                    </Link>  
                    
                    </li> 
            })
          }
        </ul>
        );
    }
}
