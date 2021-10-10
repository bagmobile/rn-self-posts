import React, {useEffect} from 'react';
import {Alert, Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {getPost} from "../../data";
import {getDate} from "../../utils";

export const ViewPostScreen = ({route, navigation}) => {

    const post = getPost(route.params.id);

    useEffect(() => {
        navigation.setOptions({title: getDate(post.date)});
    }, []);

    const deleteHandler = () => {
        Alert.alert(
            'Delete post',
            'Do you really want to delete post?',
            [
                {
                    text: 'Delete', style: 'destructive', onPress: () => {
                    }
                },
                {text: 'Cancel', style: 'cancel'}
            ],
            {cancelable: false}
        );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title="Delete" onPress={deleteHandler} color='red'/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 20
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 22
    }
});



