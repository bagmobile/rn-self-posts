import React from 'react';
import {StyleSheet} from 'react-native';
import {IconButton} from "./IconButton";

export const FavoriteButton = (props) => {

    const {isFavorite} = props;
    const iconName = isFavorite ? 'star': 'star-o';

    return <IconButton name={iconName} iconStyle={styles.icon} {...props}/>;
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 0
    }
});
