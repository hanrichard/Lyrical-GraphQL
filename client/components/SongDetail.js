import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/fetchSong'
import fetchSong from '../queries/fetchSong';
import {Link} from 'react-router'
import LyricCreate from "./LyricCreate"
import LyricList from "./LyricList"

class SongDetail extends Component {
    render() {
        const {song } = this.props.data;

        if(!song) {
            return <div>loading</div>
        }
        console.log(song)
        return (
            <div>
                <Link to="/" >back</Link>
                <h3>song detail</h3>
                <h4>{song.title}</h4>
                <LyricList lyrics ={song.lyrics}/>
                <LyricCreate id={this.props.params.id}/>
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: (props)=> {
        return {variables: {id: props.params.id}}
    }
})(SongDetail)