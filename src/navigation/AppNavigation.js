import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainScreen} from "../screens/MainScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {optionStyles} from "../../styles";
import {ViewPostScreen} from "../screens/ViewPostScreen";
import {FavoritePostsScreen} from "../screens/FavoritePostsScreen";


const Stack = createNativeStackNavigator();

export const AppNavigation = ({}) => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={optionStyles.headerDefault}
            >
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    /*options={{headerTitle: () => <ImageHeader/>}}*/
                />
                <Stack.Screen
                    name="About"
                    component={AboutScreen}
                />
                <Stack.Screen
                    name="ViewPost"
                    component={ViewPostScreen}
                    //options={({route}) => ({title: route.params.post.text})}
                />
                <Stack.Screen
                    name="FavoritePostsScreen"
                    component={FavoritePostsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

