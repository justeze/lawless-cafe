import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTransactionCreator } from "../../../redux/actions/transaction";

import './checkout.css'

const Checkout = () => {


    const dispatch = useDispatch()

    const checkout = useSelector((state) => state.menu.carts)
    const nama = useSelector((state) => state.auth.user.name)
    // console.log(nama)

    const totalPrice = () => {
        return checkout.reduce((total, item) => {
            return total + item.price * item.qty;
        }, 0);
    };

    const invoice = new Date().getTime()

    const data = {
        tagihan: invoice,
        kasir: nama,
        total_harga: totalPrice() + (totalPrice() * 0.1),
        transaksi: [
            ...checkout.map((menu) => {
                return { id_produk: menu.id, kuantitas: menu.qty }
            })
        ]
    }

    return (
        <div className="modal fade checkout" id="checkout" tabIndex="-1" aria-labelledby="checkout" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="row ml-1 mr-1">
                            <div className="col-4 d-flex justify-content-start">
                                <h4>Checkout </h4>
                            </div>
                            <div style={{ marginTop: 50 }}>

                            </div>
                            <div className="col-8 d-flex justify-content-end">
                                <h5>Receipt no: #{invoice}</h5>
                            </div>
                        </div>
                        <div className="row ml-1 mr-1">
                            <div className="col-4 d-flex justify-content-start">
                                <h5>Cashier : { nama }</h5>
                            </div>
                            <div style={{ marginTop: 50 }}>

                            </div>
                        </div>
                        {checkout.map((item) => {
                            // console.log(item)
                            return (
                                <div className="row ml-1 mr-1">
                                    <div className="col-4 d-flex justify-content-start">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <p>{item.qty}x</p>
                                    </div>
                                    <div className="col-6 d-flex justify-content-end">
                                        <p>{item.price === ""
                                            ? ""
                                            : `${(
                                                item.price * item.qty
                                            ).toLocaleString('id', { style: 'currency', currency: 'IDR' })}`}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="row ml-1 mr-1">
                            <div className="col-6 d-flex justify-content-start">
                                <p>Ppn 10%</p>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <p>{(0.1 * totalPrice()).toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
                            </div>
                        </div>
                        <div className="row ml-1 mr-1">
                            <div className="col-6 d-flex justify-content-start">

                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <p>Total: {(totalPrice() + (totalPrice() * 0.1)).toLocaleString('id', { style: 'currency', currency: 'IDR' })}</p>
                            </div>
                        </div>
                        <div className="row ml-1 mr-1">
                            <div className="col-6 d-flex justify-content-start">
                                Payment : Cash
                                    </div>
                            <div className="col-6 ">

                            </div>
                        </div>

                    </div>
                    <div className="modal-footer asu">
                        <button type="button" className="btn btn-pink btn-lg btn-block jabingan" data-dismiss="modal"
                            onClick={() => {
                                dispatch(addTransactionCreator(data))
                            }}
                        >Print</button>
                        <button type="button" className="btn btn-blue btn-lg btn-block bajingan" data-dismiss="modal">Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout