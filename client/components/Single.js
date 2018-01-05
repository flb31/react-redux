import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
    render() {

        const {params, posts, comments} = this.props;

        // index of the post
        const i = posts.findIndex( (post) => post.code === params.postId);
        const post = posts[i];
        const postComments = comments[params.postId] ||  [];

        // get the post
        if(!post) {
            return (
                <div className="single-photo">
                    404 Not Found
                </div> 
            )
        }

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div> 
        ) 
        
    }
};

export default Single;
