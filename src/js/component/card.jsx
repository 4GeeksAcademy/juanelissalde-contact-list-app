import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, phone, email, address, id, updateId }) => {
    return (
        <>
            <div className="card d-flex my-3 mx-auto col-11" key={id}>
                <div className="d-flex flex-wrap">
                    <img src={`https://picsum.photos/200?random=${id}`} className="rounded-circle my-4 mx-5" alt="..." style={{ maxWidth: "180px" }} />
                    <ul className="list-unstyled d-flex flex-column text-start m-4 my-auto p-2" >
                        <li> <h5 className="card-title">{name}</h5></li>
                        <li className="card-address"><i className="fas fa-map-marker-alt me-2"></i>{address}</li>
                        <li className="card-phone"><i className="fas fa-phone me-2"></i>{phone}</li>
                        <li className="card-email"><i className="fas fa-envelope me-2"></i>{email}</li>
                    </ul>
                    <div className="ms-auto me-5 mt-4" role="group" aria-label="Basic outlined example">
                        <button onClick={() => updateId()} type="button" className="btn text-dark border-0 mx-2 my-3 fs-5" data-bs-toggle="modal" data-bs-target="#trashModal">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                        <button onClick={() => updateId()} type="button" className="btn text-dark border-0 mx-2 my-3 fs-5" data-bs-toggle="modal" data-bs-target="#editModal">
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};