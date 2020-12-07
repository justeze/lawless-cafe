import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authClearState } from '../../../redux/actions/auth'

import './logout.css'

const Logout = () => {

    const dispatch = useDispatch()

    return (
        <div class="modal fade" id='logout' tabindex="-1" aria-labelledby="checkout" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Logout</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure want to logout?</p>
                    </div>
                    <div class="modal-footer">
                        {/* <Link to='/login'> */}
                            <button type="button" class="btn logout-btn" data-dismiss="modal" onClick={() => {
                                dispatch(authClearState())
                            }}>Logout</button>
                        {/* </Link> */}
                        <button type="button" class="btn cncl-btn" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout