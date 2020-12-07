import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItemsCreator, getCtgrCreator } from "../../../redux/actions/menu";

import './add-items.css'

const AddItems = () => {
    const [name, setName] = useState('')
    const [img, setImage] = useState(null)
    const [price, setPrice] = useState('')
    const [ctgr, setCtgr] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCtgrCreator())
    }, [])

    const category = useSelector((state) => state.menu.ctgr)
    // console.log(img)

    return (
        <>
            <div className="modal add fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-add">Add Menu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body ">
                            <div className="row" style={{ marginBottom: 10 }}>
                                <div className="col-2">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="col-10">
                                    <input className="form-control" name="name" type="text" id="name" autoComplete="off" onChange={(event) => {
                                        setName(event.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: 10 }}>
                                <div className="col-2">
                                    <label htmlFor="image">Image</label>
                                </div>
                                <div className="col-10">
                                    <input className="form-control" name="picture" type="file" id="image" autoComplete="off" onChange={(event) => {
                                        setImage(event.target.files[0])
                                    }} />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: 10 }}>
                                <div className="col-2">
                                    <label htmlFor="price">Price</label>
                                </div>
                                <div className="col-10">
                                    <input className="form-control price" name="price" type="number" id="price" autoComplete="off" onChange={(event) => {
                                        setPrice(event.target.value)
                                    }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="cat">Category</label>
                                </div>
                                <div className="col-10" >
                                    <select className="form-control category" name="id_category" id="cat" autoComplete="off" onChange={(event) => {
                                        setCtgr(event.target.value)
                                        
                                    }} >
                                        <option value="" disabled hidden>Category</option>
                                        {category.map((item) => {
                                            return (
                                                <option key={item.id} value={item.id}>{item.kategori}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer asu">
                            <button type="button" className="btn  btn-pink btn-lg btn-block jabingan" onClick={() => {
                                dispatch(addItemsCreator(name, price, ctgr, img))
                            }} data-dismiss="modal" >Add</button>
                            <button type="button" className="btn btn-blue btn-lg btn-block bajingan" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddItems