import React, {Component} from 'react';

class LyricList extends Component {
    renderSongs() {
        return this.props.lyrics.map(({id, content}) => {
            return (
                <li className="collection-item" key={id}>
                    {content}
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

export default LyricList;