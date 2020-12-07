import React from "react";
import "./navbar.css";
import MenuImg from "../../assets/menu.png"
import SearchImg from "../../assets/magnifying-glass.png"
import SearchModal from '../modal/search-items/search-items'
import { useSelector } from "react-redux";

const Navbar = () => {

    const auth = useSelector((state) => state.auth.user.level_id);

    return (
        <>
            {auth === 2 ?
                <div className="header">
                    <div className="logo-menu">
                        <img src={MenuImg} alt="Logo-Menu" />
                    </div>
                    <div className="title-header">
                        <p>Food Items</p>
                    </div>
                    <div className="logo-search" >
                        {/* <button type="button" className="block" data-toggle="modal" data-target="#search"> */}
                        <img src={SearchImg} alt="logo-search" data-toggle="modal" data-target="#search" />
                        {/* </button> */}
                    </div>

                    <div className="title-cart">
                        <p>
                            Cart{" "}
                            <span className="badge badge-pill badge-primary">
                                0
                            </span>
                        </p>
                    </div>

                </div>
                :
                <div className="header-admin">
                    <div className="logo-menu">
                        <img src={MenuImg} alt="Logo-Menu" />
                    </div>
                    <div className="title-header-admin">
                        <p>Food Items</p>
                    </div>

                    <div className="logo-search-admin" >
                        {/* <button type="button" className="block" data-toggle="modal" data-target="#search"> */}
                        <img src={SearchImg} alt="logo-search" data-toggle="modal" data-target="#search" />
                        {/* </button> */}
                    </div>

                </div>

            }
            <SearchModal />
        </>
    )
}
export default Navbar