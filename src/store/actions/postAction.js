import {ADD_POST, DELETE_POST, LOAD_POSTS, TOGGLE_FAVORITE_POST} from "../typeActions";
import {DATA} from "../../../data";

export const loadPosts = () => ({
    type: LOAD_POSTS,
    payload: DATA
});

export const toggleFavoritePost = (id) => ({
    type: TOGGLE_FAVORITE_POST,
    payload: id
});

export const deletePost = id => ({
    type: DELETE_POST,
    payload: id
});

export const addPost = (post) => ({
    type: ADD_POST,
    payload: post
})

