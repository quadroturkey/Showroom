import React from 'react'
import { Card, Image, Rating, Icon } from 'semantic-ui-react'
// const poster_url = `https://image.tmdb.org/t/p/w500/`

const CardFront = (props) => 
<Card.Group>
    <Card >
      <Card.Content>
        <Image src={`https://image.tmdb.org/t/p/w780/${props.movie.poster_path}`} onClick={props.handleClick}/>
        <Card.Header>{props.movie.title}</Card.Header>
        <Card.Meta>
          released: {props.movie.release_date}
        </Card.Meta>
          <Icon onClick={() => props.addMovie(props.movie)} name='save'/>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Rating maxRating={5} defaultRating={props.movie.vote_average/2} disabled/>         
        </a>      
      </Card.Content>
    </Card>
  </Card.Group>

export default CardFront