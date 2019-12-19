import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { CATEGORIES } from './../data/dummy-data';
import CategoryGridTitle from './../components/CategoryGridTitle'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './../components/HeaderButton'
import Color from './../constants/colors'


export default function CategoriesScreen(props) {
  const renderGridItem = (itemData) => {
    return <CategoryGridTitle
      title={itemData.item.title}
      color={itemData.item.color}
      onSelect={() => {
        props.navigation.navigate({
          routeName: "CategoriesMeal", params: {
            categoryId: itemData.item.id
          }
        })
      }} />
  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
