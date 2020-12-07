import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { authClearState, authLoginCreator } from "../../redux/actions/auth";

const Login = (props) => {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState(null);
    const [uname, setUname] = useState('')
    const [pword, setPword] = useState('')

    const { handleSubmit, register, errors } = useForm();

    const {
        status: statusLogin,
        errMsg: errMsgUser,
    } = useSelector((state) => state.auth);
    // const errMsgUser = useSelector((state) => state.auth.user.msg)

    const onSubmit = (data) => {
        // console.log('kambing')
        dispatch(authLoginCreator(data))
    }

    useEffect(() => {
        document.title = "Login | Lawless";
    }, []);

    useEffect(() => {
        if (statusLogin === 200) {
            return props.history.push("/");
        } else {
            return setErrMsg(errMsgUser);
        }
    }, [statusLogin]);

    useEffect(() => {
        if (uname !== null && pword !== null) {
            setErrMsg(null)
            dispatch(authClearState())
        }
    }, [uname, pword])

    return (
        <div className='login'>
            <p className='desc'>
                Please login with your account
						</p>
            {errMsg === null ? null : (
                <p className='errMsg' >
                    {errMsg}
                </p>
            )}
            <form
                className='formContainer'
                onSubmit={handleSubmit(onSubmit)}>
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
                    onChange={(event) => {
                        setUname(event.target.value)
                    }}
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
                            setPword(event.target.value)
                        }}
                    />
                </div>
                <p style={{ fontSize: 16, color: "red", width: 400 }}>
                    {errors.password && errors.password.message}
                </p>
                <p className='forgot'>
                    <span onClick={() => { }}>
                        <Link
                            className='bla'
                            to="/EmailInput"
                        >
                            Forgot password?
									</Link>
                    </span>
                </p>

                <button className='loginSubmit' type="submit">Submit</button>
                <div className='signUpBtn'>
                    <p>
                        Don't have any account?{" "}
                        <span onClick={() => { }}>
                            <Link
                                className='bla'
                                to="/register"
                            >
                                Register
						</Link>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login