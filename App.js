// noinspection JSUnusedGlobalSymbols

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {AppNavigation} from "./src/navigation/AppNavigation";
import {Provider} from "react-redux";
import store from "./src/store"
import {DB} from "./src/db/db";

export default function App() {
    const [loadedFont] = useFonts({
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    useEffect(() => {
        (async () => {
            await DB.init()
        })();
    }, []);

    if (!loadedFont) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}
