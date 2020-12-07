import React from 'react';
import { addToCart, editItemMenu } from '../../redux/actions/menu'
import { useDispatch, useSelector } from 'react-redux';
import ModalEdit from '../modal/edit-items/edit-items'

import "./menu.css"

const Menu = () => {
    const dispatch = useDispatch()

    const menu = useSelector((state) => state.menu.menu)
    const auth = useSelector((state) => state.auth.user.level_id);   
    
    // console.log(menu)
    
    return (
        <>
            {auth === 1 ?
                <div className="content-menu-admin">
                    <div className="col-md-12 bg-items">
                        <div className="row">
                            {menu.map((item) => {
                                return (
                                    <div className="col-md-3 mt-4"
                                        key={item.id}
                                    >
                                        {/* <button type="button" className="nav-link" style={{backgroundColor: 'red', height: 220, width: 220}}> */}

                                            <img
                                                src={item.gambar_produk}
                                                alt="img-espresso"
                                                className="img-fluid product-img"
                                                onClick={() => {
                                                    dispatch(editItemMenu(item.id, item.nama_produk, item.harga_produk, item.kategori, item.gambar_produk))
                                                }}
                                                data-toggle="modal" 
                                                data-target="#modal-edit"
                                            />
                                        {/* </button> */}
                                        <ModalEdit />
                                        <p style={{marginTop: 10}}>{item.nama_produk}</p>
                                        <p style={{marginTop: -10}}>{item.harga_produk.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div> :
                <div className="content-menu">
                    <div className="col-md-12 bg-items">
                        <div className="row">
                            {menu.map((item) => {
                                return (
                                    <div className="col-md-4 mt-4"
                                        key={item.id}
                                    >
                                        <img
                                            src={item.gambar_produk}
                                            alt="img-espresso"
                                            className="img-fluid"
                                            onClick={() => {
                                                dispatch(addToCart(
                                                    item.id,
                                                    item.nama_produk,
                                                    item.harga_produk,
                                                    item.gambar_produk
                                                ))
                                            }}
                                        />
                                        <p style={{marginTop: 10}}>{item.nama_produk}</p>
                                        <p style={{marginTop: -10}}>{item.harga_produk.toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Menu