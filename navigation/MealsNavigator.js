import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from './../screens/CategoriesScreen';
import CategoriesMealScreen from './../screens/CategoriesMealScreen';
import MealDetailScreen from './../screens/MealDetailScreen';
import Colors from './../constants/colors';
import FavouritesScreen from './../screens/FavouritesScreen';
import FiltersScreen from './../screens/FiltersScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: "#ffffff"
    }
}

const MealNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoriesMeal: {
        screen: CategoriesMealScreen
    },
    MealDetailScreen: MealDetailScreen
}, { defaultNavigationOptions: defaultStackNavOptions }
);


const favNavigator = createStackNavigator(
    {
        Favourites: {
            screen: FavouritesScreen
        },
        MealDetail: MealDetailScreen
    },
    { defaultNavigationOptions: defaultStackNavOptions }
);


const tabScreenConfig = {
    Meals: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primaryColor
        },
    },
    Favourites: {
        screen: favNavigator,
        tabBarLabel: "Favourites!",
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accentColor
        }
    }
}


const MealsFavTabNavigator = Platform.OS === "android" ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeColor: "#ffffff",
    shifting: true
}) :
    createBottomTabNavigator(
        tabScreenConfig,
        {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        }
    );

const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen
    },
}, { defaultNavigationOptions: defaultStackNavOptions })

const mainNavigator = createDrawerNavigator({
    MealFav: MealsFavTabNavigator,
    Filters: FiltersNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.accentColor
        }
    }
)

export default createAppContainer(mainNavigator)
