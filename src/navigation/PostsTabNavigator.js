import {MAIN_COLOR} from "../../styles";
import {Ionicons} from "@expo/vector-icons";
import {Posts} from "../components/Posts";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActivityIndicator, Platform, StyleSheet, View} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {loadPosts} from "../store/actions/postAction";
import {createSelector} from "reselect";

const Tab = (Platform.OS === 'android') ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const PostsTabNavigator = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts());
    }, []);

    const loading = useSelector(({postReducer}) => postReducer.loading);

    const posts = useSelector(({postReducer}) => postReducer.posts);

    const selectFavoritePosts = createSelector(
        ({postReducer}) => postReducer.posts,
        (posts) => posts.filter(post => post.booked)
    );

    const favoritePosts = useSelector(selectFavoritePosts);

    if (loading) {
        return (
            <View style={styles.centerLoader}>
                <ActivityIndicator color={MAIN_COLOR}/>
            </View>
        );
    }

    return (
        <Tab.Navigator
            initialRouteName='AllPostsScreen'
            shifting={true}
            activeColor="#f0edf6"
            inactiveColor="#1f1d1e"
            barStyle={{backgroundColor: MAIN_COLOR}}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: MAIN_COLOR,
                tabBarInactiveTintColor: '#1f1d1e',
                tabBarShowLabel: false,
            }}>
            <Tab.Screen name="AllPostsScreen" options={{
                title: 'All',
                tabBarIcon: ({color}) => <Ionicons name="md-list-sharp" size={24} color={color}/>,
            }}>
                {props => <Posts {...props} posts={posts}/>}
            </Tab.Screen>
            <Tab.Screen name="FavoritePostsScreen" options={{
                title: 'Favorite',
                tabBarIcon: ({color}) => <Ionicons name="bookmarks-outline" size={24} color={color}/>,
            }}>
                {props => <Posts {...props} posts={favoritePosts}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    centerLoader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
