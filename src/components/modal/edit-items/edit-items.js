import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addItemsCreator, editItemsCreator, getCtgrCreator } from "../../../redux/actions/menu";

import './edit-items.css'

const EditItems = () => {

    const dispatch = useDispatch()

    const selectedMenu = useSelector((state) => state.menu.editItemState)
    const category = useSelector((state) => state.menu.ctgr)

    useEffect(() => {
        dispatch(getCtgrCreator())
    }, [])

    const [editForm, setEditForm] = useState({
        // id: Number(selectedMenu.id),
        name: selectedMenu.name ? selectedMenu.name : '',
        price: selectedMenu.price ? selectedMenu.price : '',
        ctgr: selectedMenu.category === 'Baverages' ? selectedMenu.category === 1 : selectedMenu.category === 'Foods' ? selectedMenu.category === 2 : '',
        img: selectedMenu.img ? selectedMenu.img : '',
        imagePreviewUrl: ''
    })

    console.log(selectedMenu)

    // const inputRef = React.useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, price, ctgr, img } = editForm
        dispatch(editItemsCreator(Number(selectedMenu.id), name, price, ctgr, img))
    }

    return (
        <>
            <div className="modal add fade" id="modal-edit" tabIndex="-1" aria-labelledby="modal-edit" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-add">Edit Menu</h5>
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
                                        setEditForm({ name: event.target.value })
                                    }} defaultValue={selectedMenu.name} />
                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: 10 }}>
                                <div className="col-2">
                                    <label htmlFor="image">Image</label>
                                </div>
                                <div className="col-10" style={{ display: 'flex', flexDirection: 'row' }}>
                                    <img
                                        className='editMenuImage'
                                        src={
                                            editForm.imagePreviewUrl ?
                                                editForm.imagePreviewUrl : selectedMenu.img
                                        }
                                    />
                                    <input style={{ width: '100%' }} className="form-control" name="picture" type="file" id="image" autoComplete="off" onChange={(event) => {
                                        let reader = new FileReader();
                                        let file = event.target.files[0];

                                        reader.onloadend = () => {
                                            setEditForm({
                                                img: file,
                                                imagePreviewUrl: reader.result,
                                            });
                                        };
                                        reader.readAsDataURL(file);
                                    }} value='' />

                                </div>
                            </div>
                            <div className="row" style={{ marginBottom: 10 }}>
                                <div className="col-2">
                                    <label htmlFor="price">Price</label>
                                </div>
                                <div className="col-10">
                                    <input className="form-control price" name="price" type="number" id="price" autoComplete="off" onChange={(event) => {
                                        setEditForm({ price: event.target.value })
                                    }} defaultValue={selectedMenu.price} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-2">
                                    <label htmlFor="cat">Category</label>
                                </div>
                                <div className="col-10" >
                                    <select className="form-control category" name="id_category" id="cat" autoComplete="off" onChange={(event) => {
                                        setEditForm({ ctgr: event.target.value })
                                    }}>
                                        <option disabled hidden>Category</option>
                                        {category.map((item) => {
                                            return (
                                                item.kategori === selectedMenu.category ?
                                                    <option key={item.id} value={item.id} selected>{item.kategori}</option> : <option key={item.id} value={item.id} >{item.kategori}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer asu">
                            <button type="button" className="btn  btn-pink btn-lg btn-block jabingan" onClick={(event) => {
                                handleSubmit(event)
                            }} data-dismiss="modal" >Edit</button>
                            <button type="button" className="btn btn-blue btn-lg btn-block bajingan" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditItems