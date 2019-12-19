import React from 'react'
import { HeaderButtons } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'


export default function HeaderButton(props) {
    return (
        <HeaderButtons
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS == 'android' ? 'white' : "gray"}
        />
    )
}
