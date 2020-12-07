import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuCreator } from '../../redux/actions/menu'
import { Redirect } from 'react-router-dom';

import Sidebar from '../../components/left-side-bar/left-side-bar';
import Sidecart from '../../components/right-side-bar/right-side-bar';
import Navbar from '../../components/top-nav-bar/navbar';
import Menu from '../../components/menu.js/menu';

import "./home.css"

const Home = () => {

    const dispatch = useDispatch()

    const auth = useSelector((state) => state.auth.user.level_id);

    useEffect(() => {
        dispatch(getMenuCreator())
    }, [])

    return (
        <>
            <Navbar />
            <Sidebar />
            <Menu />
            {auth === 2 ?
                <Sidecart /> : null
            }
        </>
    )
}

export default Home