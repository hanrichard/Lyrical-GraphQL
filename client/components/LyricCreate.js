import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import query from '../queries/fetchSongs'

class LyricCreate extends Component { 
    constructor(props) {
        super(props);

        this.state={
            title:''
        }
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.mutate({
            variables: {
                content: this.state.title,
                songId: this.props.id
            },
            refetchQueries: [{query}]
        }).then(() => this.setState({
            title: ''
        }))
    }
    
    render() {
        return (
            <form onSubmit={
                this.onSubmit.bind(this)
            }>  
            <label>create lyric</label>
                <input 
                    value={this.state.title}
                    onChange={(e)=> this.setState({title: e.target.value})}
                    />
            </form>
        )

    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID!) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                id
                content
            }
        }
    }
`;

export default graphql(mutation)(LyricCreate);