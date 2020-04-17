import React from 'react'
import MovieCard from './MovieCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Header, Container } from 'semantic-ui-react';
let i = 0
 
class MovieCollection extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          visibleSlides={5}
          step={5}
          naturalSlideWidth={150}
          naturalSlideHeight={300}
          totalSlides={this.props.movies.length}
          infinite
        >
        <Header size='small'>{this.props.genreName}</Header>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
          <Slider>
            {this.props.movies.map(movie => <Slide index={i++}><MovieCard movie={movie} key={movie.id} icon={this.props.icon} handleMovie={this.props.handleMovie}/></Slide>)}
          </Slider>
        </CarouselProvider>
      </Container>
    );
  }
}

export default MovieCollection