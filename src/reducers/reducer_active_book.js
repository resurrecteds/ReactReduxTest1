// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    // if we don't care about the current action, just return the current state
    return state;
}