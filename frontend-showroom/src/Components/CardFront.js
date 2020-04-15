import React from 'react'
import { Card, Image, Rating, Icon } from 'semantic-ui-react'

const poster_url = `https://image.tmdb.org/t/p/w780/`

const CardFront = (props) => 
  <Card fluid>
    <Card.Content>
      <Image src={`${poster_url}${props.movie.poster_path}`} onClick={props.handleClick}  />
      <Card.Header>{props.movie.title}</Card.Header>
      <Card.Meta>
        {props.movie.release_date.slice(0,4)}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Rating maxRating={5} defaultRating={props.movie.vote_average/2} disabled/>         
        <Icon onClick={() => props.addMovie(props.movie)} name='save'/>
    </Card.Content>
  </Card>

export default CardFront