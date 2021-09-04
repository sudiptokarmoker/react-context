import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: '#555', ui : '#ddd', bd : '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg: }
    };
    render() { 
        return (  );
    }
}
 
export default ThemeContextProvider;