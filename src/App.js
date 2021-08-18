import {useDispatch, useSelector} from "react-redux";

import 'react-toastify/dist/ReactToastify.min.css';

import { ToastContainer } from 'react-toastify';

import {Route, Switch} from "react-router-dom";

import {useEffect} from "react";

import UpdatePassword from "./components/Authorization/UpdatePassword/UpdatePassword";

import ForgotPassword from "./components/Authorization/ForgotPassword/ForgotPassword";

import Registration from "./components/Authorization/Registration/Registation";

import Login from "./components/Authorization/Login/Login";

import {authActions} from "./redux/actions/authActions";

import './App.css';

function App() {
    useEffect(() => {
        dispatch(authActions.setUserRequest())
    }, [])
    const dispatch = useDispatch()
    const {user} = useSelector(({auth}) => auth)
    return (
        <>
            <ToastContainer />
            <Switch>
                <Route path='/login' render={() => <Login user={user}/>}/>
                <Route path='/registration' render={() => <Registration user={user}/>}/>
                <Route path='/forgot' render={() => <ForgotPassword user={user}/>}/>
                <Route path='/update/:link' render={() => <UpdatePassword />} />
                <Route exact path='/' render={() => 'вы авторизованы'}/>
            </Switch>
        </>
    );
}

export default App;
