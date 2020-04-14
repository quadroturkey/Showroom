import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const MovieCard = (props) => 
  <Card.Group>
      <Card onClick={props.handleClick}>
          <Card.Content>
              <Image src={props.movie.poster}/>
              <Card.Header>{props.movie.title}</Card.Header>
              <Card.Meta>{props.movie.genres.map(genre => `${genre} `)}</Card.Meta>
          </Card.Content>
      </Card>
  </Card.Group>


export default MovieCard