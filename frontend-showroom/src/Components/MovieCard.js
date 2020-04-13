import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const MovieCard = (props) => (
  <Card.Group>
      <Card>
          <Card.Content>
              <Image src={props.movie.poster} />
              <Card.Header>
                  {props.movie.title}
              </Card.Header>
              <Card.Meta>
                  {props.movie.genres}
              </Card.Meta>
              <Card.Description>
                  {props.movie.description}
              </Card.Description>
          </Card.Content>
      </Card>
  </Card.Group>
)

export default MovieCard