// a reduces takes in two things:

// 1. the action (info about what happened)
// 2.  copy of current state

function posts(state = [], action) {
    
    switch(action.type) {
        case 'INCREMENT_LIKES':
            console.log('increment likes!');
            const i = action.index;
            return [
                ...state.slice(0,i), // before updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) // after updating
            ]
        default:
            return state;
    }
}

export default posts;