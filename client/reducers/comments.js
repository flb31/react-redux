// a reduces takes in two things:

// 1. the action (info about what happened)
// 2.  copy of current state

function postComments(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                ...state, {
                    user: action.author,
                    text: action.comment
                }
            ];

        case 'REMOVE_COMMENT':
            console.log('REMOVE_COMMENT ', action.index);
            return [
                // from the start to the one we want to delete
                ...state.slice(0, action.index),

                // after the deleted one, to the end
                ...state.slice(action.index + 1)
            ];

        default:
            return state;
    }

}


function comments(state = [], action) {
    console.log('comments ', action.postId);
    if(typeof action.postId !== 'undefined') {
        
        return {
            // take the current state
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;