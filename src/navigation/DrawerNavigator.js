import React from 'react';
import {AboutScreen} from "../screens/AboutScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {PageNavigator} from "./PageNavigator";
import {CreatePostScreen} from "../screens/CreatePostScreen";
import {Ionicons} from "@expo/vector-icons";
import {MAIN_COLOR} from "../../styles";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

    return (
        <Drawer.Navigator screenOptions={{drawerActiveBackgroundColor: MAIN_COLOR}}>
            <Drawer.Screen name="Main" component={PageNavigator} options={{headerShown: false}}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
            <Drawer.Screen name="CreatePost"
                           component={CreatePostScreen}
                           options={{
                               headerTitle: 'Create post',
                               drawerIcon: () => <Ionicons name="add-outline" size={20} color="black"/>
                           }}/>
        </Drawer.Navigator>
    );
}
