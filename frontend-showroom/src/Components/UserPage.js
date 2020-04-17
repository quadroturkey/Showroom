import React from 'react'
import MovieCollection from './MovieCollection'
import { Button } from 'semantic-ui-react';

class UserPage extends React.Component {
    constructor() {
        super()

        this.state = {
            user: {},
            movies: [],
            icon: 'remove circle',
            color: 'red'
        }
    }

    componentDidMount() {
        // this.setState({
        //     userId: parseInt(window.location.href.split("/").slice(-1)[0])
        // })
        this.fetchUser()
    }

    fetchUser = () => {
        const urlInput = parseInt(window.location.href.split("/").slice(-1)[0])
        fetch(`http://localhost:3000/users/${urlInput}`)
            .then(r => r.json())
            .then(user => {
                this.setState({
                    user,
                    movies: user.movies
                })
            })

    }

    deleteMovie = movie => {
        console.log(movie)
        const id = movie.id

        fetch(`http://localhost:3000/user_movies/`)
        .then(r => r.json())
        .then(data => {
            const userMovies = data.filter(function(movie){
                return movie.user_id === 1
            })
            console.log(userMovies)
            const userMovie = userMovies.filter(function(movie){
                return movie.movie_id === id
            })
            const userMovieId = userMovie[0].id

            fetch(`http://localhost:3000/user_movies/${userMovieId}`, {
                method: 'DELETE',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
              })
                .then(res => res.json())
                .then(movie => {
                   const newMovies = this.state.movies.slice(0)
                   const movieIndex = newMovies.indexOf(movie)
                   newMovies.splice(movieIndex, 1)
                  this.setState({
                      movies: newMovies
                  })
                })
        })
    

      }

    render() {
        return (
            <div>
                <a href='http://localhost:3001'><Button>Home Page</Button></a>
                <h1>{`${this.state.user.name}'s Page`}</h1>
                <MovieCollection movies={this.state.movies} icon={this.state.icon} color={this.state.color} handleMovie={this.deleteMovie}/>
            </div>



        )
    }
}

export default UserPage;