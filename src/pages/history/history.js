import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuImg from "../../assets/menu.png"
import SideBar from '../../components/left-side-bar/left-side-bar';
import Card from '../../components/history-card/history-card';
import Chart from '../../components/history-chart/history-chart';
import HistoryTable from '../../components/history-table/history-table';

import './history.css';
import { getHistoryCreator } from '../../redux/actions/history';
// import {Redirect} from 'react-router-dom';
// import ModalLogOut from '../components/modal/ModalLogOut';
// import ModalAddProduct from '../components/modal/ModalAddProduct';

const History = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHistoryCreator())
    }, [])

    return (
        <div className='history'>
            <div className='navbar navbar-history'>
                <img src={MenuImg} alt='logo-menu' className='icon' />
                <p>History</p>
            </div>
            <div className='row no-gutters content-history'>
                <div className='col col-md-1'>
                    <SideBar />
                </div>
                <div className='col col-md-11'>
                    <Card />
                    <Chart />
                    <HistoryTable />
                </div>
            </div>
            {/* <ModalAddProduct />
            <ModalLogOut /> */}
        </div>
    )
}

export default History