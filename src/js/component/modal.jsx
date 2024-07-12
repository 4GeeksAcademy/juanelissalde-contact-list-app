import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Modal = ({id}) => { /* Recibiendo id como props */
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="modal" tabIndex="-1" id="trashModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Are you sure?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>If you delete this thing the entire universe will go down!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no!</button>
                            <button onClick={() => actions.deleteCard(id)} data-bs-dismiss="modal" type="button" className="btn btn-primary">Yes baby!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
