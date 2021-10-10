import React from 'react';
import {Image} from 'react-native';

export const ImageHeader = ({}) => {

    return (
        <Image
            style={{width: 50, height: 50}}
            source={require('../../../assets/images/home.png')}
        />
    );
}

