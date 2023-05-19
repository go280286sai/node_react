import React from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import Validate from "../Validate";

class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            valid: true
        }
    }
    sendMessage_2 = async (event) => {
        event.preventDefault();
        const url = document.getElementById("form_2").action;
        const name = document.getElementById('name_2').value;
        const phone = document.getElementById('phone_2').value;
        const time = document.getElementById('time').value;
        if (name.length < 2) {
            alert("Введите Ваше имя")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (Validate.isValidPhoneNumber(phone) === false) {
            alert("Введите правильно номер телефона")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (time.length < 2) {
            alert("Введите время")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (this.state.valid === true) {
            const data = {
                target: "callback",
                subject: "Заказ звонка",
                text: `Имя: ${name}
Телефон: ${phone}
Время: ${time}`
            }
            await axios.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .then(() => {
                    document.getElementById('name_2').value = '';
                    document.getElementById('phone_2').value = '';
                    document.getElementById('time').value = '';
                    this.setState({status: true});
                    setTimeout(() => {
                        this.setState({status: false})
                    }, 3000);
                }).catch(err => {
                    console.log(err.message)
                })
        }
    }

    render() {
        return (
            <div>
                <br/>
                <h1 className={"text_h3"}>Хотите мы перезвоним Вам завтра:</h1>
                <form action={"/email"} method={"post"} id={"form_2"}>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="name" className="form-label">Имя *</label>
                        <input type="text" className="form-control" id="name_2" aria-describedby="emailHelp" name="name"
                               placeholder={"Имя"} />
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="phone" className="form-label">Телефон *</label>
                        <input type="phone" className="form-control" id="phone_2" aria-describedby="emailHelp"
                               name={"phone"} placeholder={"Телефон"}/>
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="time" className="form-label">Укажите удобное время *</label>
                        <input type="text" name={"time"} className="form-control" id="time" aria-describedby="emailHelp"
                               placeholder={"часы:минуты"}/>
                    </div>
                    <button type="submit" onClick={this.sendMessage_2.bind(this)}
                            className="btn btn-danger text_h4">Отправить
                    </button>
                    {this.state.status ? <i style={{backgroundColor: "green", fontSize: "16px"}}>Отправлено</i> : ''}
                </form>
                <p>Вы принимаете условия <Link to="/policy">политики конфиденциальности</Link>, нажимая кнопку
                    "Отправить".</p>
            </div>
        )
    }
}

export default Order;