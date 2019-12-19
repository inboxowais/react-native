import React from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { MEALS } from './../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Color from './../constants/colors'
import { ScrollView } from 'react-native-gesture-handler';


const ListItem = props => {
    return <View style={styles.listItem}>
        <Text>{props.children}</Text>
    </View>
}
export default function MealDetailScreen(props) {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity}</Text>
                <Text>{selectedMeal.affordability}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <Text>List of ingredients...</Text>
            {selectedMeal.ingredients.map((ingredients, index) => {
                return <ListItem key={index}>{ingredients}</ListItem>
            })}
            <Text style={styles.title}>Steps</Text>
            <Text>List of steps...</Text>
            {selectedMeal.steps.map((steps, index) => {
                return <ListItem key={index}>{steps}</ListItem>
            })}
        </ScrollView>
    )
}

MealDetailScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: Color.primaryColor
        },
        headerTintColor: "#fff"
    };
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    title: {
        fontSize: 22,
        textAlign: "center"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10
    }
});
