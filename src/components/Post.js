import React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getDate} from "../../utils";


export const Post = ({post, onView}) => {

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onView}>
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={{uri: post.img}}>
                    <View style={styles.textWrap}>
                        <Text style={styles.text}>{getDate(post.date)}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    background: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    text: {
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
        fontSize: 18
    }
});
