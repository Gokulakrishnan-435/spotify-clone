import React, {Fragment, useContext }from 'react'
import {
    Redirect
    , Route
} from 'react-router-dom'
import { AuthContextApi } from '../Apis/AuthContent'
import Spinner from '../Pages/Spinner/Spinner';

const ProtectedRoute = ({ component: Component, ...parameters }) => {
    let USER = useContext(AuthContextApi);
    return (
        <Route
            {...parameters}
            render={props => {
                return (
                    <Fragment>
                        {USER === null ? (<Spinner />) : (<Fragment>
                            {USER?<Component{...props}/>:<Redirect to="/login"/>}
                        </Fragment>)}
                    </Fragment>
                )
            }}
        ></Route>
    )
}
        
    
export default ProtectedRoute
