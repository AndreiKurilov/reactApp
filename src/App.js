import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" 
                 render={ () => <DialogsContainer />} />
          <Route path="/profile" 
                 render={ () => <Profile />} />
          <Route path="/users" 
                 render={ () => <UsersContainer /> } />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
