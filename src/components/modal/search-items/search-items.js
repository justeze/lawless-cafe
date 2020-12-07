import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMenuSearchCreator } from '../../../redux/actions/menu';
import './search-items.css'

const Search = () => {
    const dispatch = useDispatch()

    const [search, setSearch] = useState('');

    console.log(search)

    return (

        <div className="modal fade search" id="search" tabIndex="-1" aria-labelledby="search" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Search Menu</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className='form-search'>
                            <input type='text' placeholder='Search' className='input-search' onChange={(event) => {
                                setSearch(event.target.value)
                            }}></input>
                        </div>
                    </div>
                    <div className="modal-footer asu">
                        <button type="button" className="btn btn-blue btn-lg btn-block jabingan" onClick={() => {
                            dispatch(getMenuSearchCreator(search, 'nama_produk'))
                        }} data-dismiss="modal">Search</button>
                        <button type="button" className="btn  btn-pink btn-lg btn-block bajingan" data-dismiss="modal" >Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
