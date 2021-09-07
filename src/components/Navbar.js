import React, { Component } from 'react';
<<<<<<< HEAD
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return ( 
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        )
      }}</ThemeContext.Consumer>
    );
  }
=======
class Navbar extends React.Component {
    render() { 
        return(
            <nav>
                <h1>Context App</h1>
                <ul>
                    <li>Home test</li>
                    <li>About</li>
                    <li>Country</li>
                </ul>
            </nav> 
        );
    }
>>>>>>> 1eddf891876e7cd5385a485233eb0b42049c6409
}
 
export default Navbar;