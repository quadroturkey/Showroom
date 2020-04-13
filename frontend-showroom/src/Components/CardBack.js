import React from 'react'
import { Card } from 'semantic-ui-react'

const MovieCard = (props) => 
  <Card.Group>
      <Card onClick={props.handleClick}>
          <Card.Content>
              <Card.Description>{props.movie.description}</Card.Description>
          </Card.Content>
      </Card>
  </Card.Group>


export default MovieCard