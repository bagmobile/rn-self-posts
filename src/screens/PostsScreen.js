import React, {useLayoutEffect} from 'react';
import {DATA} from "../../data";
import {PhotoButton} from "../components/ui/PhotoButton";
import {MenuButton} from "../components/ui/MenuButton";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Posts} from "../components/Posts";
import {Ionicons} from "@expo/vector-icons";
import {MAIN_COLOR} from "../../styles";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Platform} from "react-native";

const Tab = (Platform.OS === 'android') ? createMaterialBottomTabNavigator() : createBottomTabNavigator();


export const PostsScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Posts',
            headerRight: () => <PhotoButton onPress={() => {
                navigation.navigate('CreatePost')
            }}/>,
            headerLeft: () => <MenuButton onPress={() => {
                navigation.toggleDrawer()
            }}/>,
        });
    }, [navigation]);

    return (
        <Tab.Navigator
            initialRouteName='AllPostsScreen'
            //labeled={false}
            shifting={true}
            activeColor="#f0edf6"
            inactiveColor="#1f1d1e"
            barStyle={{backgroundColor: MAIN_COLOR}}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: MAIN_COLOR,
                tabBarInactiveTintColor: '#1f1d1e',
                tabBarShowLabel:false,
                tabBarBadgeStyle: {
                    backgroundColor: '#5776b0',
                    marginLeft: 8
                }
            }}>
            <Tab.Screen name="AllPostsScreen" options={{
                title: 'All',
                tabBarIcon: ({color}) => <Ionicons name="md-list-sharp" size={24} color={color}/>,
                tabBarBadge: DATA.length
            }}>
                {props => <Posts {...props} posts={DATA}/>}
            </Tab.Screen>
            <Tab.Screen name="FavoritePostsScreen" options={{
                title: 'Favorite',
                tabBarIcon: ({color}) => <Ionicons name="bookmarks-outline" size={24} color={color}/>,
                tabBarBadge: DATA.filter(item => item.booked).length
            }}>
                {props => <Posts {...props} posts={DATA.filter(item => item.booked)}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
