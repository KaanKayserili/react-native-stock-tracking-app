import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//import { UserProvider } from "./utils/userContext";

import Login from "./screens/Login"
import Main from "./screens/Main"
import Details from "./screens/Details"
import Settings from "./screens/Settings"
import LanguageProvider from "./providers/LanguageProvider";
import ThemeProvider from "./providers/ThemeProvider";

const SignedInStack = () => {
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
            <ThemeProvider>
                <LanguageProvider>
                    <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions} >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Main" component={Main} />
                        <Stack.Screen name="Details" component={Details} />
                        <Stack.Screen name="Settings" component={Settings} />
                    </Stack.Navigator>
                </LanguageProvider>
            </ThemeProvider>
        </NavigationContainer>
    )
}

export default SignedInStack