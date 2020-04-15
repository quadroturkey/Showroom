import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import Search from './Search';

const apiKey=`123e2f78bfa3cc8be6fbaf3324b4409f`

export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: ''
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then(resp => resp.json())
      // .then(data => console.log(data.results[0]))
      .then(data => {
        console.log(data.results[0])
        this.setState({ movies: data.results })
      })
  }

  addMovie = (e) => {
    console.log(e.genre_ids)
    this.postMovie(e)
    this.postAssosiation(e)
  }

  postMovie = (e) => {
    fetch("http://localhost:3000/movies", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: e.id,
        title: e.title,
        poster_path: e.poster_path,
        release_date: e.release_date,
        vote_average: e.vote_average,
        overview: e.overview,
        genre_ids: e.genre_ids
      })
    })
  }

  postAssosiation = (e) => {
    fetch("http://localhost:3000/user_movies", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_movies: {
          user_id: 1,
          movie_id: e.id
        }
      })
    })
  }

  onSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      search: e.target.value.toLowerCase()
    })   
  }
  
  includeSearch = (str) => {
    return str.toLowerCase().includes(this.state.search)
  }

  filterMovies = () => {
    const movies = this.state.movies.slice(0)
    return movies.filter((movie) => this.includeSearch(movie.title))
  }

  render() {
    return (
      <>
        <Search onSearch={this.onSearch} />
        <MovieCollection movies={this.filterMovies()} addMovie={this.addMovie}/>
      </>
    )
  }
}