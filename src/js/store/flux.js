const getState = ({ getStore, getActions, setStore }) => {
	let user = "juanelissalde";
	const url = "https://playground.4geeks.com/contact";

	return {
		store: {
			contacts: []
		},
		actions: {
			createCard: () => {
				fetch(`${url}/agendas/${user}`, {
					method: "POST",
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => response.json())
					.then((response) => console.log(response))
					.catch(error => console.log(error))
			},

			getData: () => {
				fetch(`${url}/agendas/${user}`)
					.then((response) => {
						if (response.status == 404) {
							getActions().createCard();
							return false;
						}
						return response.json();
					})
					.then(data => { setStore({ contacts: data.contacts }); })
					.catch(error => console.log(error));
			},

			deleteCard: (id) => {
				fetch(`${url}/agendas/${user}/contacts/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error("Failed to delete contact");
						}
						getActions().getData(); // Refresh contact list after deletion
					})
					.catch(error => console.log(error));
			},

			createContact: (name, email, phone, address) => {
				fetch(`${url}/agendas/${user}/contacts`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					})
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error("Failed to create contact");
						}
						getActions().getData(); // Refresh contact list after creation
					})
					.catch(error => console.log(error));
			},

			editData: (id, name, email, phone, address) => {
				fetch(`${url}/agendas/${user}/contacts/${id}`, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address,
					})
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error("Failed to update contact");
						}
						getActions().getData(); // Refresh contact list after update
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
