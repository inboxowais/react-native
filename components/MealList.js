import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import MealItem from './MealItem'




export default function MealList(props) {

    const renderMealItem = itemData => {
        return (<MealItem
            title={itemData.item.title}
            style={styles.menu}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            complexity={itemData.item.complexity.toUpperCase()}
            affordability={itemData.item.affordability.toUpperCase()}
            onSelectMeal={() => {
                props.navigation.navigate({
                    routeName: "MealDetailScreen",
                    params: {
                        mealId: itemData.item.id
                    }
                })
    
            }} />);
    }
    
    return (
        <View style={styles.screen}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});