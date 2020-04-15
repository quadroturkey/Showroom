import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import Search from './Search';

const apiKey=`123e2f78bfa3cc8be6fbaf3324b4409f`

const genres = [
  {id: 28, name: "Action"},
  {id: 12, name: "Adventure"},
  {id: 16, name: "Animation"},
  {id: 35, name: "Comedy"},
  {id: 80, name: "Crime"},
  {id: 99, name: "Documentary"},
  {id: 18, name: "Drama" },
  {id: 10751, name: "Family" },
  {id: 14, name: "Fantasy"},
  {id: 36, name: "History"},
  {id: 27, name: "Horror" },
  {id: 10402, name: "Music"},
  {id: 9648, name: "Mystery"},
  {id: 10749, name: "Romance" },
  {id: 878, name: "Science Fiction"},
  {id: 10770, name: "TV Movie"},
  {id: 53, name: "Thriller"},
  {id: 10752, name: "War"},
  {id: 37, name: "Western"}
  ]

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
      .then(data => {
        console.log(data.results)
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