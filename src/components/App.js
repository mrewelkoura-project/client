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
      data:[]
    };
  }

  componentDidMount(){
    axios
    .get('http://localhost:8080/api/data')
    .then((result)=>{
      this.setState({
        data:result.data      
      });
      console.log(this.state.data)
      console.log(result.data)
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
            <Route exact path="/" element={<MainPage data={this.state.data} />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path={`/confirm/:_id`} element={<Confirm data={this.state.data}/>}/>
            <Route exact path="/addJersey" element={<AddJersey/>}/>
            <Route default element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
