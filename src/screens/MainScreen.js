import React, {useLayoutEffect} from 'react';
import {DATA} from "../../data";
import {PhotoButton} from "../components/ui/PhotoButton";
import {MenuButton} from "../components/ui/MenuButton";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Posts} from "../components/Posts";
import {Ionicons} from "@expo/vector-icons";
import {MAIN_COLOR} from "../../styles";

const Tab = createBottomTabNavigator();

export const MainScreen = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Posts',
            headerRight: () => <PhotoButton onPress={() => {
            }}/>,
            headerLeft: () => <MenuButton onPress={() => {
            }}/>
        });
    }, [navigation]);

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: MAIN_COLOR,
                tabBarInactiveTintColor: '#1f1d1e',
                tabBarLabelPosition: 'beside-icon',

            }}>
            <Tab.Screen name="AllPostsScreen" options={{
                title: 'All',
                tabBarIcon: ({color}) => <Ionicons name="md-list-sharp" size={20} color={color}/>,
                tabBarBadge: DATA.length
            }}>
                {props => <Posts {...props} posts={DATA}/>}
            </Tab.Screen>
            <Tab.Screen name="FavoritePostsScreen" options={{
                title: 'Favorite',
                tabBarIcon: ({color}) => <Ionicons name="bookmarks-outline" size={20} color={color}/>,
                tabBarBadge: DATA.filter(item => item.booked).length
            }}>
                {props => <Posts {...props} posts={DATA.filter(item => item.booked)}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
}
