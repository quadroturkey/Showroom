import React, { Component } from 'react';

export default class MovieCard extends Component {
  render() {
    return (
      <>
    <div>{this.props.moive.title}</div>
    <div>{this.props.moive.poster}</div>
    <div>{this.props.movie.genres}</div>
    <div>{this.props.moive.description}</div>
    </>
    )
  }
}