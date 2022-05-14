import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.js";
import Cart from "./Cart.js";
import AboutUs from "./AboutUs.js";
import NotFound from "./NotFound.js";
import Contact from "./Contact.js";
import NavigationBar from "./NavigationBar.js";
import Confirm from "./Confirm.js";
import AddJersey from "./admin/AddJersey.js";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded:false,
      jerseys:{}
    };
  }

  componentDidMount(){
    axios
    .get('/api/jerseysdata')
    .then((result)=>{
      this.setState({
        isLoaded:true,        
      });
      console.log(result.data)
      console.log(this.jerseys)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Router>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/confirm" element={<Confirm/>}/>
            <Route exact path="/addJersey" element={<AddJersey/>}/>
            <Route default element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
