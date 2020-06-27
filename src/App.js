import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import history from "./utils/history";

import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/layout/header';
import AppLogin from './components/pages/AppLogin';
import ItemsListing from './components/pages/ItemsListing';

Axios.defaults.baseURL = 'http://localhost:4000/';
// Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class App extends Component {
  
  state={
    user_isLoggedIn:true,
    event_id:1,
    event_items:[],
    teamRegistration:{
      name:"",
      lastName:"",
      email:"",
      password:"",
      username:""
    }
  };

  
 //let history = useHistory();

  //https://reacttraining.com/react-router/web/api/Hooks/usehistory
  
  /* async componentDidMount(){
    await Axios.get("foodItems",{
      eventId:this.state.event_id
    }).then((response)=>{
      this.setState({event_items:response.data.data});
    }).then((error)=>{
      console.log(error);
    });
  } */

  event_items = async ()=> {
    await Axios.get("foodItems",{
      eventId:this.state.event_id
    }).then((response)=>{
      //console.log(response);
      //this.setState({event_items:response.data.data});
      return response.data.data;
    }).catch((error)=>{
      console.log(error);
    });
  }

  loginFormSubmit = (loginFormObject) => {
    this.setState({user_isLoggedIn:true});
    history.push("/itemListing");
    /* Axios.post('/login',loginFormObject).then((response)=>{
      if (typeof response.data.token != "undefined") {
        this.setState({user_isLoggedIn:true});
        localStorage.setItem('authToken', response.data.token);
        history.push("/itemListing");
      }
    },(error)=>{
      history.push("/");
      console.log(error);
    }); */
  }

  logoutClicked = () =>{
    this.setState({user_isLoggedIn:false});
    history.push("/");
  }

  registerUser=(userObject)=>{
    //Navigated to http://localhost:3000/?name=jason&lastName=Bourne&email=jasonbourne%40gmail.com&password=123456
    Axios.post('/addUser',userObject).then(function(response){
      console.log(response);
    });
  }
  
  render(){
    return (
      <Router history={history}>
          <Header userLoggedin={this.state.user_isLoggedIn} logoutRedirect={this.logoutClicked} />
          <Switch>
            <Route exact path="/" render={(props)=>(!this.state.user_isLoggedIn?<AppLogin  pageParentContainerStyle={pageParentContainer} loginFormSubmit={this.loginFormSubmit} />:history.push("/itemListing") )} />
            <Route exact path="/itemListing" render={props=>(
              this.state.user_isLoggedIn?<ItemsListing pageParentContainerStyle={pageParentContainer}  event_items={this.event_items} />:history.push("/")  )}/>
          </Switch>
      </Router>
    //
    );
  }
}

const pageParentContainer={
  padding:"13px 0px 0px 0px",
  /* width: "100%", */
}

export default App;