import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DATA} from "../../data";
import {Post} from "../components/Post";

export const MainScreen = ({navigation}) => {

    const renderItem = ({item}) => {
        return (<Post post={item} onView={() => navigation.navigate('ViewPost', {id: item.id})}/>);
    }

    return (
        <View style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
