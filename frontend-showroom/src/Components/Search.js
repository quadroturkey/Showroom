import React from 'react'
import { Input, Header, Icon } from 'semantic-ui-react'

const Search = (props) => {
    return (
        <Header as='h3' className="search">
            <Icon name='search' />
            <Header.Content>
                <Input onChange={props.onSearch} placeholder='search for movie'/>
            </Header.Content>   
        </Header>
    )
}

export default Search;