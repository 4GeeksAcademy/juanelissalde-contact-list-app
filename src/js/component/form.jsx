import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
/* Para que funcione flux: 
  1. Importar useContext desde react
  2. Importar contexto desde store
  3. Desestructurar store y actions = const { store, actions } = useContext(Context);
*/

export const Form = () => {
  const { store, actions } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const saveData = (e) => {
    e.preventDefault()
    actions.createContact(name, email, phone, address)
    setName("")
    setEmail("")
    setPhone("")
    setAddress("")
  }

  return (
    <>
      <form className="d-flex flex-column">
        <div className="mb-3">
          <label className="form-label fs-4">Full Name</label>
          <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fs-4">Address</label>
          <input type="text" className="form-control" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fs-4">Phone</label>
          <input type="text" className="form-control" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fs-4">Email</label>
          <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button
          onClick={(e) => saveData(e)}
          type="button" className="btn btn-primary my-1">Save</button>
      </form>
    </>
  )
}