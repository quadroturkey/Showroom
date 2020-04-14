import React from 'react'
import { Card, Image, Rating } from 'semantic-ui-react'
const poster_url = `https://image.tmdb.org/t/p/w500/`

const MovieCard = (props) => 
  <Card.Group>
    <Card >
      <Card.Content>
        <Image src={`https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`} onClick={props.handleClick}/>
        <Card.Header>{props.movie.title}</Card.Header>
        <Card.Meta>
          {props.movie.release_data}
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a><Rating maxRating={5} defaultRating={props.movie.vote_average/2} disabled/></a>
      </Card.Content>
    </Card>
  </Card.Group>

export default MovieCard