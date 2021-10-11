import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from "./IconButton";

export const PhotoButton = (props) => {

    return <IconButton name="camera" iconStyle={styles.icon} {...props}/>;
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0
    }
});
