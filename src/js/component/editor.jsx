import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Editor = ({ id }) => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		const contact = store.contacts.find(contact => contact.id === id);
		if (contact) {
			setName(contact.name);
			setEmail(contact.email);
			setPhone(contact.phone);
			setAddress(contact.address);
		}
	}, [id, store.contacts]);

	const saveData = (e) => {
		e.preventDefault();
		actions.editData(id, name, email, phone, address);
		setName("");
		setEmail("");
		setPhone("");
		setAddress("");
	};

	return (
		<div className="modal" id="editModal">
			<div className="modal-dialog modal-lg" tabIndex="-1">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Contact</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<form className="d-flex flex-column">
							<div className="mb-3">
								<label className="form-label fs-4">Full Name</label>
								<input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
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
							<button onClick={saveData} data-bs-dismiss="modal" type="button" className="btn btn-primary my-1">Save</button>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
};
