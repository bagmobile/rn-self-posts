import React, {useLayoutEffect} from 'react';
import {PhotoButton} from "../components/ui/PhotoButton";
import {MenuButton} from "../components/ui/MenuButton";
import {PostsTabNavigator} from "../navigation/PostsTabNavigator";

export const PostsScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'My Posts',
            headerRight: () => <PhotoButton onPress={() => {
                navigation.navigate('CreatePost')
            }}/>,
            headerLeft: () => <MenuButton onPress={() => {
                navigation.toggleDrawer()
            }}/>,
        });
    }, [navigation]);

    return (
        <PostsTabNavigator/>
    );
}
