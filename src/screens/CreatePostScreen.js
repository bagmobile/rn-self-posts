import React, {useRef, useState} from 'react';
import {Button, Keyboard, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {MAIN_COLOR} from "../../styles";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actions/postAction";
import {AppImagePicker} from "../components/native/AppImagePicker";

export const CreatePostScreen = ({navigation}) => {
    const [text, setText] = useState('');
    const imgRef = useRef(null);

    const dispatch = useDispatch();

    const savePostHandler = () => {
        const newPost = {
            text,
            img: imgRef.current,
            date: new Date().toJSON(),
            booked: false
        }
        dispatch(addPost(newPost));
        navigation.navigate('Main');
    }

    const takePhotoHandler = uri => {
        imgRef.current = uri
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
                    <AppImagePicker onPick={takePhotoHandler}/>
                    <Button
                        title="Save post"
                        onPress={savePostHandler}
                        color={styles.saveButton.color}
                        disabled={!text}
                    />
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
