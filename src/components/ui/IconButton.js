import React from 'react';
import {StyleSheet} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {MAIN_COLOR} from "../../../styles";

export const IconButton = (props) => {

    return <FontAwesome.Button
        size={24}
        backgroundColor={styles.background.color}
        iconStyle={styles.icon}
        {...props}
    />;
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0,
    },
    background: {
        color: MAIN_COLOR
    }
});
