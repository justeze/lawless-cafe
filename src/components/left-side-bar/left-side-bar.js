import React from "react";

import "./left-side-bar.css";
import ForkLogo from "../../assets/fork.png"
import ClipboardLogo from "../../assets/clipboard.png"
import AddItemLogo from "../../assets/add.png"
import DeleteItemLogo from '../../assets/minus.png'
import LogoutLogo from '../../assets/logout.png'
import ModalAdd from "../modal/add-items/add-items";
import ModalLogout from '../modal/logout/logout'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



const Sidebar = () => {
    const auth = useSelector((state) => state.auth.user.level_id);

    // console.log(auth)

    return (
        <>
            <div className="sidebar-left">
                <div className="sidebar-menu">
                    <Link to='/'>
                        <img src={ForkLogo} alt="" />
                    </Link>
                    {auth === 1 ? (
                        <Link to='/history'>
                            <img src={ClipboardLogo} alt="" />
                        </Link>
                    ) : null}
                    {auth === 1 ? (
                        <button type="button" className="nav-link" data-toggle="modal" data-target="#modal-add">
                            <img src={AddItemLogo} alt="" />
                        </button>
                    ) : null}
                    {auth === 1 ? (
                        <button type="button" className="nav-link">
                            <img src={DeleteItemLogo} alt="" />
                        </button>
                    ) : null}
                    <button type="button" className="nav-link" data-toggle="modal" data-target="#logout">
                        <img src={LogoutLogo} alt="" />
                    </button>


                </div>
            </div>
            <ModalAdd />
            <ModalLogout />
        </>
    )

}
export default Sidebar