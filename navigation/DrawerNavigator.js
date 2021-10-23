// ./navigation/DrawerNavigator.js

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home Drawer" component={TabNavigator} />
      <Drawer.Screen name="Contact Drawer" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;