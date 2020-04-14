import React from 'react'
import { Grid } from 'semantic-ui-react'
import MoiveCard from './MovieCard'

const MoiveCollection = (props) => (
  <Grid divided='vertically' padded>
    <Grid.Row columns={4}>
      {props.movies.map(movie => (
        <Grid.Column width={3}>
          <MoiveCard movie={movie} key={movie.id} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
)

export default MoiveCollection