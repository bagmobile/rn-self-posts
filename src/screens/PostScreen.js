import React, {useLayoutEffect} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getDate} from "../../utils";
import {FavoriteButton} from "../components/ui/FavoriteButton";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, toggleFavoritePost} from "../store/actions/postAction";

export const PostScreen = ({route, navigation}) => {

    const id = route.params.id;
    const dispatch = useDispatch();

    const post = useSelector(({postReducer}) => postReducer.posts.find(item => item.id === id));

    const toggleFavoritePostHandler = () => {
        dispatch(toggleFavoritePost(id))
    }

    const deletePostHandler = () => {
        dispatch(deletePost(id));
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getDate(post.date),
            headerRight: () => <FavoriteButton isFavorite={post.booked} onPress={toggleFavoritePostHandler}/>,
        });
    }, [navigation, post]);

    const deleteHandler = () => {
        Alert.alert(
            'Delete post',
            'Do you really want to delete post?',
            [
                {
                    text: 'Delete', style: 'destructive', onPress: () => {
                        navigation.goBack();
                        deletePostHandler();
                    }
                },
                {text: 'Cancel', style: 'cancel'}
            ],
            {cancelable: false}
        );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title="Delete" onPress={deleteHandler} color='red'/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 20
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 22
    }
});



