/**
 * Created by Daniel on 11/7/2015.
 */
'use strict';

import React from 'react';
import marked from 'marked';

class Comment extends React.Component {

    constructor() {
        super();
        this.rawMarkup = this.rawMarkup.bind(this);
    }

    rawMarkup() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
        return {__html: rawMarkup};
    }

    render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>);
    }
}

export default Comment;