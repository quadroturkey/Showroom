import React from 'react'
import { Grid } from 'semantic-ui-react'
import MoiveCard from './MovieCard'

const MoiveCollection = (props) => (
  <Grid>
    <Grid columns={5} divided>
      {props.movies.map(movie => (
        <Grid.Column width={5}>
          <MoiveCard {...movie} key={movie.id} />
        </Grid.Column>
      ))}
    </Grid>
  </Grid>
)

export default MoiveCollection