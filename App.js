
import React from 'react';
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";
import {AppNavigation} from "./src/navigation/AppNavigation";

export default function App() {

    const [loaded] = useFonts({
        'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    if (!loaded) {
        return <AppLoading/>;
    }

    return (
        <AppNavigation/>
    );
}
