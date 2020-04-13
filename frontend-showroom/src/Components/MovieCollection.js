import React from 'react'
import { Grid } from 'semantic-ui-react'
import MoiveCard from './MovieCard'



const MoiveCollection = (props) => (
  <Grid columns={3} divided>
    {props.movies.map(movie => (
      <Grid.Column width={5}>
        <MoiveCard movie={movie} key={movie.id} />
      </Grid.Column>
    ))}
  </Grid>
)

export default MoiveCollection