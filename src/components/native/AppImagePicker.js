// noinspection JSUnresolvedVariable

import React, {useEffect, useState} from 'react';
import * as ImagePicker from "expo-image-picker";
import {Button, Image, StyleSheet, View} from "react-native";
import {MAIN_COLOR} from "../../../styles";

export const AppImagePicker = ({onPick}) => {

    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
               // let {status1} = await ImagePicker.requestCameraPermissionsAsync();
/*                if (status1 !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }*/
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
            aspect: [16, 9],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            onPick(result.uri)
        }
    };

    return <View style={styles.wrapper}>
        {image && <Image style={styles.image} source={{uri: image}}/>}
        <Button title="Take photo" onPress={pickImage} color={styles.pickImageButton.color}/>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    pickImageButton: {
        color: MAIN_COLOR
    }
});
