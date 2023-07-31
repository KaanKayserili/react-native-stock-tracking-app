import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./screens/Login"
import Main from "./screens/Main"
import Details from "./screens/Details"
import Settings from "./screens/Settings"

import { LanguageProvider } from "./utils/LanguageProvider";
import { ThemeProvider } from "./utils/ThemeProvider";
import { ItemsProvider } from "./utils/ItemsProvider";
import { UserProvider } from "./utils/UserProvider";

const Navigation = () => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    }

    const [currentRoute, setCurrentRoute] = React.useState("Login");

    const handleNavigationStateChange = (state) => {
        if (state && state.routes && state.routes.length > 0) {
            setCurrentRoute(state.routes[state.index].name);
        }
    };

    return (
        <NavigationContainer onStateChange={handleNavigationStateChange}>
            <UserProvider>
                <ThemeProvider>
                    <LanguageProvider>
                        <ItemsProvider>
                            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions} >
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="Main" component={Main} />
                                <Stack.Screen name="Details" component={Details} />
                                <Stack.Screen name="Settings" component={Settings} />
                            </Stack.Navigator>
                        </ItemsProvider>
                    </LanguageProvider>
                </ThemeProvider>
            </UserProvider>
        </NavigationContainer >
    )
}

export default Navigation