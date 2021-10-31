import {ADD_POST, DELETE_POST, LOAD_POSTS, TOGGLE_FAVORITE_POST} from "../typeActions";
import {DB} from "../../db/db";
import * as FileSystem from 'expo-file-system';

export const loadPosts = () => {
    return async dispatch => {
        const [, posts] = await DB.getPosts();
        dispatch({
            type: LOAD_POSTS,
            payload: posts
        })
    }
};

export const toggleFavoritePost = (id, booked) => async dispatch => {
    await DB.updatePostBooked(id, booked);
    dispatch({
        type: TOGGLE_FAVORITE_POST,
        payload: id
    })
};

export const deletePost = id => async dispatch => {
    await DB.deletePost(id);
    return dispatch({
        type: DELETE_POST,
        payload: id
    })
};

export const addPost = post => async (dispatch) => {
    let payload = {...post};
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
        await FileSystem.moveAsync({
            from: post.img,
            to: newPath
        });
        payload.img = newPath;
    } catch (e) {
        console.log('Move error ', e);
    }

    const {text, img, date, booked} = payload;
    const [id] = await DB.addPost([text, img, date, booked]);

    payload.id = id;

    return dispatch({
        type: ADD_POST,
        payload
    });
}

