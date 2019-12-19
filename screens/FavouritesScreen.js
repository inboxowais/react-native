import React from 'react'
import { Text, View,StyleSheet } from 'react-native';
import Color from './../constants/colors'
import MealList from './../components/MealList'
import  { MEALS } from './../data/dummy-data' 
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './../components/HeaderButton'

export default function FavouritesScreen(props) {
     const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (<MealList listData = {favMeals} navigation = {props.navigation} />)
}

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourites",
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu" onPress={() => { 

        navData.navigation.toggleDrawer();
      }}></Item>
    </HeaderButtons>,
    headerStyle: {
      backgroundColor: Color.primaryColor
    },
    headerTintColor: "#fff"
  }
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
  });
