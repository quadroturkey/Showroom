import React from 'react'
import MovieCollection from './MovieCollection'

class UserPage extends React.Component {
    constructor() {
        super()

        this.state = {
            user: {},
            movies: [],
            icon: 'remove circle'
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
    
        fetch(`http://localhost:3000/user_movies/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(movies => {
            this.setState({
              movies: movies
            })
          })
      }

    render() {
        console.log(this.state.user)
        console.log(this.state.movies)
        return (
            <div>
                <h1>{`${this.state.user.name}'s Page`}</h1>
                <MovieCollection movies={this.state.movies} icon={this.state.icon} handleMovie={this.deleteMovie}/>
            </div>



        )
    }
}

export default UserPage;