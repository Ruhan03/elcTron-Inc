import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import ProductScreen from '../screens/ProductScreen';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import { Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
       navigationOptions: {
         /*
        drawerIcon: <Icon name="home" type="fontawesome5" />,
        */
          drawerLabel: 'Home',
      },
    },
    Products: {
      screen: ProductScreen,
      navigationOptions: {
         /*
        drawerIcon: <Icon name="briefcase" type="material-community" />,
        */
        drawerLabel: 'Products',
      },
    },
    About: {
      screen: AppTabNavigator,
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
         /*
        drawerIcon: <Icon name="contact-us" type="material-sharp" />,
        */
        drawerLabel: 'Contact',
      },
    },
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
