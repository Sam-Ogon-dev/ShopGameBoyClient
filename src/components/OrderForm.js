import React from "react";
import cross from "../assets/cross.png";

export default function OrderForm({setOrderForm, order}) {
    const initState = {name: "", surname: "", middleName: "", number: "", email: ""}
    const [personData, setPersonData] = React.useState(initState);
    const [error, setError] = React.useState(false);

    function changePersonData(action, e) {
        e.persist();
        setPersonData(oldState => ({...oldState, [action]: e.target.value}))
    }

    return (
        <div className="order-form-container">
            <div className="order-form">
                <div className="close"><img src={cross} onClick={() => setOrderForm(false)}/></div>

                <div className="inputs">
                    {error ? <span style={{color: "red", fontSize: "20px", textAlign: "center"}}>Есть некорректно заполненные поля или корзина пуста!</span> : ""}
                    <input placeholder="Введите имя" onChange={e => changePersonData("name", e)}/>
                    <input placeholder="Введите фамилию" onChange={e => changePersonData("surname", e)}/>
                    <input placeholder="Введите Отчество" onChange={e => changePersonData("middleName", e)}/>
                    <input placeholder="Введите номер телефона" onChange={e => changePersonData("number", e)}/>
                    <input placeholder="Введите адрес электронной почты" onChange={e => changePersonData("email", e)}/>
                </div>

                <button className="neutral-button accept" onClick={() => {
                    fetch("http://localhost:3001/order", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({personData, order})
                    }).then(r => r.text()).then(r => {
                        if(r === "done") { setOrderForm(false) }
                        if(r === "error") { setError(true) }
                    })
                }}>Оформить заказ</button>
            </div>
        </div>
    );
}