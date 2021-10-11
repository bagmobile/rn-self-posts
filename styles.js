import {StyleSheet} from "react-native";

export const MAIN_COLOR = '#373ba3';

export const styles = StyleSheet.create({
    containerDefaultCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const optionStyles = {
    headerDefault: {
        headerStyle: {
            backgroundColor: MAIN_COLOR
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontFamily: 'OpenSans-Bold'
        }
    },
}
