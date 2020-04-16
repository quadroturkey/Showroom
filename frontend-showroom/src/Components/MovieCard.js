import React, {Component} from 'react';
import CardBack from './CardBack'
import CardFront from './CardFront'
import ReactCardFlip from 'react-card-flip';

class MovieCard extends Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false,
      poster: '',
      icon: ''
    };
    // this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <CardFront movie={this.props.movie} frontKey={this.props.movie.id} handleClick={this.handleClick} icon={this.props.icon} handleMovie={this.props.handleMovie}/>     
        <CardBack movie={this.props.movie} backKey={this.props.movie.id} handleClick={this.handleClick} />
      </ReactCardFlip>
    )
  }
}

export default MovieCard;