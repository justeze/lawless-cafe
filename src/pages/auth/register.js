import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { authRegisterCreator } from "../../redux/actions/auth";

const Register = (props) => {
    const dispatch = useDispatch();
    const [pwd, setPwd] = useState('')
    const [pwd1, setPwd1] = useState('')
    const [pwdErr, setPwdErr] = useState('')
    const [errMsg, setErrMsg] = useState(null);

    const { handleSubmit, register, errors } = useForm();

    const { user: registerUser, errMsg: errMsgUser, } = useSelector((state) => state.auth);

    const onSubmit = (data) => {
        const newData = {
            ...data,
            level_id: 2
        }
        // console.log(newData.name)
        dispatch(authRegisterCreator(newData.name, newData.username, newData.password, newData.level_id))

    }

    useEffect(() => {
        document.title = "Register | Lawless";
    }, []);

    useEffect(() => {
        if (pwd1 !== pwd) {
            // setErrMsg('')
            setPwdErr('Password doesnt match')
        }
    }, [pwd, pwd1]);

    useEffect(() => {
        if (registerUser.msg === "register success") {
            props.history.push("/login");
        } else {
            setErrMsg(errMsgUser);
        }
    }, [registerUser.msg, errMsgUser]);

    return (
        <div className='login'>
            <p className='desc'>
                Please register if you don't have any account
						</p>
            {errMsg === null ? null : (
                <p className='errMsg'>
                    {errMsg}
                </p>
            )}
            <form
                className='formContainer'
                onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='loginInput'
                    name="name"
                    placeholder="Name"
                    ref={register({
                        required: "Required",
                        // pattern: {
                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //     message: "invalid email address"
                        // }
                    })}
                />
                <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    {errors.name && errors.name.message}
                </p>
                <input
                    className='loginInput'
                    name="username"
                    placeholder="Username"
                    ref={register({
                        required: "Required",
                        // pattern: {
                        //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //     message: "invalid email address"
                        // }
                    })}
                />
                <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    {errors.username && errors.username.message}
                </p>

                <div>
                    <input
                        className='loginInput'
                        placeholder="Password"
                        name="password"
                        type="password"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                message: "Password must contain at least 1 number, an uppercase letter and more than 8 characters",
                            }
                        })}
                        onChange={(event) => {
                            setPwd(event.target.value)
                        }}
                    />
                </div>
                <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    {errors.password && errors.password.message}
                </p>
                <div>
                    <input
                        className='loginInput'
                        placeholder="Repeat Password"
                        name="pwd1"
                        type="password"
                        ref={register({
                            required: "Required",
                            pattern: {
                                value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
                                message: "Password must contain at least 1 number, an uppercase letter and more than 8 characters",
                            }
                        })}
                        onChange={(event) => {
                            setPwd1(event.target.value)
                        }}
                        // onBlur={() => {
                            
                        // }
                        // }
                    />
                    {/* <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    </p> */}
                </div>
                <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    {pwdErr}
                    {errors.pwd1 && errors.pwd1.message}
                </p>

                {/* <p className='forgot'>
                    <span onClick={() => { }}>
                        <Link
                            className='bla'
                            to="/EmailInput"
                        >
                            Forgot password?
									</Link>
                    </span>
                </p> */}

                <button className='registerSubmit' type="submit">Submit</button>
                <div className='signUpBtn'>
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => { }}>
                            <Link
                                className='bla'
                                to="/login"
                            >
                                Login
						</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register