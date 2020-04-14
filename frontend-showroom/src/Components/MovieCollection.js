import React from 'react'
import MovieCard from './MovieCard'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
let i = 0
 
class MovieCollection extends React.Component {
  render() {
    return (
      <CarouselProvider
        visibleSlides={5}
        step={3}
        naturalSlideWidth={245}
        naturalSlideHeight={420}
        totalSlides={this.props.movies.length}
        infinite
      >
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
        <Slider>
          {this.props.movies.map(movie => <Slide index={i++}><MovieCard movie={movie} key={movie.id}/></Slide>)}
        </Slider>
      </CarouselProvider>
    );
  }
}

export default MovieCollection