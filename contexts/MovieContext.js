import React, { Component, createContext, useReducer, useEffect, useState } from 'react'
// import { movieReducer } from '../reducers/movieReducer'

export const MovieContext = createContext()


class MovieContextProvider extends Component {
  state = {
    highlightedMovies: []
  }

  componentDidUpdate() {
    localStorage.setItem('highlightedMovies', JSON.stringify(this.state.highlightedMovies))  
  }

  componentDidMount() {
    const data = localStorage.getItem('highlightedMovies')
    if(data) {
      this.setState({ highlightedMovies : JSON.parse(data) })
    }
  }

  addMovie = (movieId) => {
    // check if movieId exists and don't add another
    if (!this.state.highlightedMovies.includes(movieId)) {
      this.setState({ highlightedMovies:  [...this.state.highlightedMovies, movieId] })
    }
  }

  removeMovie = (movieId) => {
    this.setState({ highlightedMovies: this.state.highlightedMovies.filter(id => id !== movieId) })
  }

  render() {
    return (
      <MovieContext.Provider value={{ ...this.state, addMovie: this.addMovie, removeMovie: this.removeMovie }}>
        {this.props.children}
      </MovieContext.Provider>
    )
  }
}

export default MovieContextProvider

