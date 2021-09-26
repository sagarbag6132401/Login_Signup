import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import validation from './validation';
const Signup = () => {
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [inputData, setinputData] = useState(
        {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            city: "",
            number: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    );

    const [output, setOutput] = useState(
        {
            output_firstName: "",
            output_lastName: "",
            output_address: "",
            output_state: "",
            output_city: "",
            output_number: "",
            output_email: "",
            output_password: "",
            output_confirmPassword: ""
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
                output_firstName: inputData.firstName,
                output_lastName: inputData.lastName,
                output_address: inputData.address,
                output_state: inputData.state,
                output_city: inputData.city,
                output_number: inputData.number,
                output_email: inputData.email,
                output_password: inputData.password,
                output_confirmPassword: inputData.confirmPassword
            }
        })
        setErrors(validation(inputData))
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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#94d7dcdb", flexDirection: "column" }}>
                    <h1 style={{ color: "green" }} >Registration Successfull!</h1><br />
                    <button style={{
                    }} >
                        <NavLink to="/" style={{ color: "white", textDecoration: "none" }} >Back To Login</NavLink>
                    </button>
                </div> :
                <>
                    <div className="logincontainer">
                        <div className="registration">
                            <form onSubmit={submitData}>
                                <label htmlFor="html1">Enter Your First Name</label><br />
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.firstName}
                                    name="firstName"
                                />
                                <br />
                                {errors.firstName && <p className="error">{errors.firstName}</p>}

                                <label htmlFor="html2">Enter Your Last Name</label><br />
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.lastName}
                                    name="lastName"
                                />
                                <br />
                                {errors.lastName && <p className="error">{errors.lastName}</p>}

                                <label htmlFor="html3">Enter Your Address</label><br />
                                <input

                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.address}
                                    name="address"
                                />
                                <br />

                                <label htmlFor="html4">Enter Your State</label><br />
                                <input
                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.state}
                                    name="state"
                                />
                                <br />

                                <label htmlFor="html5">Enter Your City</label><br />
                                <input

                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.city}
                                    name="city"
                                />
                                <br />

                                <label htmlFor="html6">Enter Your Phone Number</label><br />
                                <input

                                    type="number"
                                    autoComplete="off"
                                    minLength="10"
                                    onChange={take_inputData}
                                    value={inputData.number}
                                    name="number"
                                />
                                <br />
                                {errors.number && <p className="error">{errors.number}</p>}

                                <label htmlFor="html7">Enter Your Email ID</label><br />
                                <input

                                    type="text"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.email}
                                    name="email"
                                />
                                <br />
                                {errors.email && <p className="error">{errors.email}</p>}

                                <label htmlFor="html8">Enter Password</label><br />
                                <input

                                    type="password"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.password}
                                    name="password"
                                />
                                <br />
                                {errors.password && <p className="error">{errors.password}</p>}


                                <label htmlFor="html9">Enter Confirm Password</label><br />
                                <input

                                    type="password"
                                    autoComplete="off"
                                    onChange={take_inputData}
                                    value={inputData.confirmPassword}
                                    name="confirmPassword"
                                />
                                <br />
                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}


                                <button type="submit">SUBMIT</button>
                                <button>
                                    <NavLink to="/" style={{ color: "white", textDecoration: "none" }} >LOGIN</NavLink>
                                </button>
                            </form>
                        </div>
                    </div>

                </>
            }
        </>
    )
}
export default Signup;
