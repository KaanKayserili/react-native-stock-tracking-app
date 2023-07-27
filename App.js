import React from "react";
import Main from "./screens/Main";
import ThemeProvider from "./ThemeProvider";
const App = () => {

    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
};

export default App;

