import React, { useState } from 'react'
import Banner from '../component/Banner'
import LoginForm from './LoginForm'
import Home from '../component'
import './index.css'

function Login() {

    const [login, setLogin] = useState(false)

    const checkLogin = ({ username, password }) => {
        if (username === "dinesh" && password === "123") {
            setLogin(true)
        }
        else {
            setLogin(false)
        }

    }

    return (
        <>
            {
                login ? (<Home />)
                    :
                    (
                        <>
                            <Banner />
                            <div className="container" >
                                <div className="w3-card-4 logincard">
                                    <h4 className="w3-center pt-3">Welcome to Login</h4>
                                    <LoginForm checkLogin={checkLogin} />
                                </div>
                            </div>
                        </>


                    )
            }

        </>
    )
}

export default Login
