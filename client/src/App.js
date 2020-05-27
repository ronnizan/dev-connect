import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import NotFound from "./components/layout/NotFound";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utills/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/Create-profile";
import EditProfile from "./components/profile-form/EditProfile";
import AddExperience from "./components/profile-form/AddExperience";
import AddEducation from "./components/profile-form/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profile/Profile";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path='/' component={Landing}></Route>
          <section className='container'>
            <Alert></Alert>
            <Switch>
              <Route exact path='/register' component={Register}></Route>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/profiles' component={Profiles}></Route>
              <Route exact path='/profile/:id' component={Profile}></Route>
              <PrivateRoute
                exact
                path='/dashboard'
                component={Dashboard}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/posts'
                component={Posts}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path='/posts/:id'
                component={Post}
              ></PrivateRoute>
              {/* <Route></Route> */}
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
