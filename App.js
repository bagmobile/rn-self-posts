// noinspection JSUnusedGlobalSymbols

import 'react-native-gesture-handler';
import React from 'react';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {AppNavigation} from "./src/navigation/AppNavigation";
import {Provider} from "react-redux";
import store from "./src/store"

export default function App() {

    const [loaded] = useFonts({
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    if (!loaded) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}
