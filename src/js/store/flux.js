const getState = ({ getStore, getActions, setStore }) => {

	let user = "juanelissalde";
	const url = "https://playground.4geeks.com/contact";

	return {
		store: {
			contacts: []
		},
		actions: {

			// Inicio fincionalidades crear Tarjetas -----------------------------------
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
							getActions().createCard()
							return false
						}
						return response.json()
					})
					.then(data => { setStore({ contacts: data.contacts }) })
					.catch(error => console.log(error))
			},

			deleteCard: (id) => {
				fetch(`${url}/agendas/${user}/contacts/${id}`, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then((response) => response.json())
					.then((response) => console.log(response))
					.catch(error => console.log(error))
				getActions().getData()
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
					.then((response) => response.json())
					.then((response) => console.log(response))
					.catch(error => console.log(error))
			}
		}
	};
};

export default getState;
