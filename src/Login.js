import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import validationlogin from './validationlogin';
import Homepage from './Homepage';

const Login = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [errors, setErrors] = useState({});
    const [inputData, setinputData] = useState(
        {
            email: "",
            password: "",
        }
    );
    const [output, setOutput] = useState(
        {
            output_email: "",
            output_password: "",

        }
    )

    const take_inputData = (event) => {
        const { name, value } = event.target;
        setinputData((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            }
        })

    }
    const submitData = (event) => {
        event.preventDefault();
        setOutput(() => {
            return {

                output_email: inputData.email,
                output_password: inputData.password,

            }
        })
        setErrors(validationlogin(inputData))
        setIsSubmit(true)
    }
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            setFormIsSubmitted(true)
        }

    }, [errors]);



    return (

        <>
            {formIsSubmitted ?
                <>
                    <Homepage />

                </> :
                <>
                    <div className="logincontainer">
                        <div className="registration">
                            <form onSubmit={submitData}>
                                <label htmlFor="html">Enter Your Email ID</label><br />
                                <input
                                    type="text"
                                    autoComplete="off"
                                    name="email"
                                    value={inputData.email}
                                    onChange={take_inputData}
                                /><br />
                                {errors.email && <p className="error">{errors.email}</p>}

                                <label htmlFor="html">Enter Your Password</label><br />
                                <input
                                    type="password"
                                    autoComplete="off"
                                    name="password"
                                    value={inputData.password}
                                    onChange={take_inputData}
                                /><br />
                                {errors.password && <p className="error">{errors.password}</p>}

                                <br />
                                <button type="submit">LOGIN</button>
                                <button><NavLink to="/signup" style={{ color: "white", textDecoration: "none" }}>SIGNUP</NavLink></button>
                            </form>

                        </div>
                    </div>
                </>
            }
        </>

    )
}
export default Login;