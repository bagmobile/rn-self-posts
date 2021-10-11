import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from "./IconButton";

export const MenuButton = (props) => {

    return <IconButton name="navicon" iconStyle={styles.icon} {...props}/>;
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 10
    }
});
