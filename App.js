import React, { Component } from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./pages/account/login.jsx";
import Sign from "./pages/account/sign.jsx";
import Home from "./pages/account/home/home.jsx";
import O from "./pages/sub-pages/o.jsx";
import Two from "./pages/sub-pages/t.jsx";
import Three from "./pages/sub-pages/three.jsx";
import Four from "./pages/sub-pages/four.jsx";
import Fifth from "./pages/sub-pages/fifth.jsx";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Sign' component={Sign} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Basic (without skill)' component={O} />
        <Stack.Screen name='Advance (with skill)' component={Two} />
        <Stack.Screen name='Content Writing' component={Three} />
        <Stack.Screen name='Video Creator' component={Four} />
        <Stack.Screen name='Help' component={Fifth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
