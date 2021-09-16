import React, { Component, Fragment } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// function test(params) {
//   console.log(params);
// }

// function Navbar() {
//   test();
//   return (
//     <Fragment>
//       Hello
//     </Fragment>
//   );
// }

//export default Navbar;


class Navbar extends Component {
  static contextType = ThemeContext;
  constructor(){
    super();
    console.log("constructor called here");
  }
  static contextType = ThemeContext;
  test = () => {
    console.log("Printing logger method......");
  };
  render() {
    //this.test(10, 'sudipto karmoker.....');
    //const { isLightTheme, light, dark } = this.context;
    // const isLightTheme = this.context.isLightTheme;
    // const light = this.context.light;
    // const dark = this.context.dark;

    // console.log(isLightTheme) ;
    // console.log(light);
    // console.log(dark);

    return (
      <Fragment>
        <nav>
          <h1>Context App</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
