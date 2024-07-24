import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Card } from "./card.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Modal } from "./modal.jsx";
import { Editor } from "./editor.jsx";

export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [id, setId] = useState(null);

    useEffect(() => {
        actions.getData();
    }, []);

    return (
        <>
            {store.contacts.map((item) => (
                <Card
                    key={item.id}
                    name={item.name}
                    phone={item.phone}
                    email={item.email}
                    address={item.address}
                    id={item.id}
                    updateId={() => setId(item.id)}
                />
            ))}
            <Modal id={id} />
            <Editor id={id} />
        </>
    );
};
