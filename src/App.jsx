import React, { useContext, Fragment } from "react";
import Navbar from "./Pages/HeaderComponent/Navbar";
import Slider from "./Pages/SliderComponent/Slider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { AuthContextApi } from "./Apis/AuthContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserHome from "./UsersComponent/UserHome";
import MyFirstPortal from "./Pages/CreatePortal/MyFirstPortal";
import Spinner from "./Pages/Spinner/Spinner";
import ProtectedRoute from "./Helper/ProtectedRoute";
import PublicRoute from './Helper/PublicRoute';
import PasswordReset from "./Components/AuthComponent/PasswordReset";
import PhoneAuth from "./Components/AuthComponent/PhoneAuth";

const App = () => {
  let state = useContext(AuthContextApi);

  return (
    <section>
      <article>
        <Router>
          <header>
            {/* {state? <Navbar />:""} */}
            <Navbar />
          </header>
          <ToastContainer />

          <main>
            {/* dynamic routing starts here */}
            <Switch>
              <PublicRoute path="/" exact>
                <Home />
              </PublicRoute>
              <PublicRoute path="/login" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Signup />
              </PublicRoute>
              {/* Start Authenticated routes */}

              {/* {state === null ? (
                  <Spinner />
                ) : (
                  <Route path="/userhome">
                    <UserHome />
                  </Route>
                )} */}
              <PublicRoute path="/password-reset" exact>
                <PasswordReset />
              </PublicRoute>
              <PublicRoute path="/phone-auth" exact>
               <PhoneAuth/>
              </PublicRoute>
              <ProtectedRoute path="/userhome" component={UserHome} />
              {/* <ProtectedRoute path="/userhome">
                  <UserHome/>
                </ProtectedRoute> */}
              {/* End Authenticated routes */}
              <PublicRoute path="*">
                <PageNotFound />
              </PublicRoute>
            </Switch>
            {/* dynamic routing ends here */}
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
