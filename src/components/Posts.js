import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Post} from "./Post";

export const Posts = ({navigation, posts}) => {

    const renderItem = ({item}) => {
        return (<Post post={item} onView={() => navigation.navigate('Post', {id: item.id})}/>);
    }

    return (
        <View style={styles.container}>
            {!posts.length && <Text style={styles.centerText}>Add post please</Text>}
            <FlatList data={posts} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
       // alignItems: 'center',
    },
    centerText: {
    }
});
