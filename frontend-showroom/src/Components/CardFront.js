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
      <a>
        <Rating maxRating={5} defaultRating={props.movie.vote_average/2} disabled/>         
        <Icon onClick={console.log('save to user func goes here')} name='save'/>
      </a>      
    </Card.Content>
  </Card>

export default CardFront