import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectPath, ...rest }) => {
    const isLogin = useSelector((state) => state.auth.isLogin)
    return (
        <>
            <Route
                {...rest}
                path={rest.path}
                render={(props) => {
                    return (
                        <>
                            {isLogin ? (
                                <>
                                    <Component {...props} />{" "}
                                </>
                            ) : (
                                    <Redirect
                                        to={{
                                            pathname: redirectPath,
                                            state: { from: props.location },
                                        }}
                                    />
                                )}
                        </>
                    );
                }}
            />
        </>
    )

}

export default PrivateRoute