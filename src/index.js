import React from "react";
import { render } from "react-dom";
//import Hello from "./Hello";
import DesktopScreenLg from "./components/DesktopScreenLg"
import DesktopScreenMedium from "./components/DesktopScreenMedium"
import MobileScreen from "./components/MobileScreen"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./home.css"
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 0 //This is where I am having problems
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    let size = 0;
    if(window.innerWidth>1200)
    {
      size = 2
    }
    else if(window.innerWidth>768 && window.innerWidth <=1200)
    {
      size = 1
    }
    else
    {
      size = 0
    }
    this.setState({ size: size });
  }

  render() {
    const size = this.state.size;
    return(
    <DesktopScreenLg />
    )
    // if(size === 2)
    // {
    //   return(
    //     <DesktopScreenLg />
    //   )
    // }
    // else if (size === 1)
    // {
    //   return (
    //     <div>test1</div>
        
    //   )
    // }
    // else if (size === 0)
    // {
    //     return(
    //     <div>test0</div>
    //     )
    // }
    
    
  }
}

render(<App />, document.getElementById("root"));

