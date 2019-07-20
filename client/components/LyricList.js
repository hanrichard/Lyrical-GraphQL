import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

class LyricList extends Component {
    onLike(id, likes) {
        this.props.mutate({
            variables: {id},
            optimisticResponse: {
                __typename: 'Mutation', 
                likeLyric: {
                    id,
                    __typename: 'LyricType',
                    likes: likes + 1
                }
            }
        })
    }

    renderSongs() {
        return this.props.lyrics.map(({id, content, likes}) => {
            return (
                <li style={{display: "flex", justifyContent: "space-between"}}className="collection-item" key={id}>
                    {content}
                    <span>{likes}
                    <i 
                        onClick={()=> {this.onLike(id, likes)}}
                        className="material-icons">thumb_up</i></span>
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="collection">{this.renderSongs()}</ul>
        )
    }
}


const mutation = gql`
    mutation likeLyric($id:ID){
    likeLyric(id:$id) {
      id
      likes
    }
}`


export default graphql(mutation)(LyricList);