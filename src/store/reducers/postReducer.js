import {ADD_POST, DELETE_POST, LOAD_POSTS, TOGGLE_FAVORITE_POST} from "../typeActions";

const initialState = {
    posts: []
}

export const postReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_POSTS:
            return {...state, posts: action.payload};
        case TOGGLE_FAVORITE_POST:
            return {
                ...state,
                posts: state.posts.map(item => item.id === action.payload ? {...item, booked: !item.booked} : item)
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(post => post.id !== action.payload)}
        case ADD_POST:
            return {...state, posts: [ action.payload, ...state.posts]}
        default:
            return state
    }

}
