import React from 'react';

class Comments extends React.Component {

    //
    constructor() {
        super();

        console.log('handle delete');
        // this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete (e, postId, i) {
        this.props.removeComment(postId, i);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { postId } = this.props.params;
        const author  = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    // Render

    renderComment(comments) {
        return comments.map((comment, i) => {
            return (
                <div className="comment" key={i}>
                    <p>
                        <strong>{comment.user}</strong>
                        {comment.text}
                        <button
                            className="remove-comment"
                            onClick= { (e) => this.handleDelete(e, this.props.params.postId, i)}>
                            &times;
                        </button>
                    </p>
                </div>
            )
        })
    }

    render() {
        
        return (
            <div className="comment">
                {this.renderComment(this.props.postComments)}

                <form ref="commentForm" className="comment-form" onSubmit={(e) => this.handleSubmit(e) }>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}

export default Comments;
