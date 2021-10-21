import React from "react";
import {optionStyles} from "../../styles";
import {PostsScreen} from "../screens/PostsScreen";
import {PostScreen} from "../screens/PostScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const PageNavigator = () => {

    return (
        <Stack.Navigator
            initialRouteName="Posts"
            screenOptions={optionStyles.headerDefault}
        >
            <Stack.Screen
                name="Posts"
                component={PostsScreen}
            />
            <Stack.Screen
                name="Post"
                component={PostScreen}
            />
        </Stack.Navigator>
    );
}
