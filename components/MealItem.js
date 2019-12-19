import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function MealItem(props) {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage} >
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderColor: "#ccc"
    },
    mealHeader: {
        height: "80%"
    },
    mealDetail: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontSize: 22,
        color: "white",

        textAlign: "center"
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    }
});
