import React, { Component } from 'react';
import { Modal, GamesListManager } from '../components';

export default class GamesContainer extends Component {
    constructor (props){
        super(props);
        // The Initial State
        this.state = {games: [], selectedGame: {}, searchBar: ''};
        // bind the functions to this (context)
        this.toggleModal = this.toggleModal.bind(this);
        this.deleteGame = this.deleteGame.bind(this);
        this.setSearchBar = this.setSearchBar.bind(this);
    }

    // once the component is mounted it fethcs the data from the server

    componentDidMount(){
        this.getGames();
    }
    toggleModal (index){
        this.setState({selectedGame: this.state.games[index]});
        // since we included bootstrap we can show our modal through its syntax
        $('#game-model').modal();
    }

    getGames(){
        fetch('http://localhost:8080/games', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => response.json()) // The json response to object literal
            .then(data => this.setState({ games: data }));
    }

    deleteGame(id){
        fetch(`http://localhost:8080/games/${id}`, {
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => {
                // The game is also removed from the state thanks to the filter function
                this.setState({ games: this.state.games.filter(game => game._id !== id) });
                console.log(response.message);
            });
    }
    setSearchBar (event){
        // Super still filters super mario thanks to toLowerCase
        this.setState({ searchBar: event.target.value.toLowerCase() });
    }

    render () {
        const { games, selectedGame, searchBar } = this.state;
        return (
            <div>
                <Modal game={selectedGame} />
                <GamesListManager
                    games={games}
                    searchBar={searchBar}
                    setSearchBar={this.setSearchBar}
                    toggleModal={this.toggleModal}
                    deleteGame={this.deleteGame}
                />
            </div>
        );
    }
}