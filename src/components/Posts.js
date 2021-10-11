import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Post} from "./Post";

export const Posts = ({navigation, posts}) => {

    const renderItem = ({item}) => {
        return (<Post post={item} onView={() => navigation.navigate('ViewPost', {id: item.id})}/>);
    }

    return (
        <View style={styles.container}>
            <FlatList data={posts} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
