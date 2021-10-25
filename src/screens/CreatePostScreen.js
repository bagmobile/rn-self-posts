import React, {useRef, useState} from 'react';
import {Button, Image, Keyboard, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {MAIN_COLOR} from "../../styles";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actions/postAction";

export const CreatePostScreen = ({navigation}) => {
    const [text, setText] = useState('');
    const imageRef = useRef();

    const dispatch = useDispatch();

    const savePostHandler = () => {
        const newPost = {
            id: (new Date()).toString(),
            text,
            img: "https://designerdreamhomes.ru/wp-content/uploads/Amchit-Residence-15.jpg",
            date:  new Date().toJSON(),
            booked: false
        }

        dispatch(addPost(newPost));
        navigation.navigate('Main');
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Type something"
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        ref={imageRef}
                        style={styles.imgPreview}
                        source={{uri:"https://designerdreamhomes.ru/wp-content/uploads/Amchit-Residence-15.jpg"}}/>
                    <Button title="Save post" onPress={savePostHandler} color={styles.saveButton.color}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
        ;
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    imgPreview: {
        width: '100%',
        height: 200
    },
    textArea: {
        padding: 10,
        marginBottom: 20
    },
    saveButton: {
        color: MAIN_COLOR
    }
})
