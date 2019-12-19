import React from 'react'
import { CATEGORIES, MEALS } from './../data/dummy-data';
import MealList from './../components/MealList';
import Color from './../constants/colors'

export default function CategoryMealScreen(props) {
  const categoryId = props.navigation.getParam('categoryId');
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);
  return (<MealList listData={displayedMeals} navigation={props.navigation} />)
}

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Color.primaryColor
    },
    headerTintColor: "#fff"
  }
}
