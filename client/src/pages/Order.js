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

    sendMessage = async (event) => {
        event.preventDefault();
        const url = document.getElementById("form").action;
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const vin = document.getElementById('vin').value;
        const products = document.getElementById('products').value;
        if (name.length < 2) {
            alert("Введите Ваше имя")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (Validate.isValidPhoneNumber(phone) === false) {
            alert("Введите правильно номер телефона")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (vin.length < 2) {
            alert("Введите vin")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (products.length < 2) {
            alert("Введите Запрашиваемые товары")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (this.state.valid === true) {
            console.log('ok')
            const data = {
                target: "consult",
                subject: "Заказ консультации",
                text: `Имя: ${name}
Телефон: ${phone}
VIN: ${vin}
Запчасти: ${products}`
            }
            await axios.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .then(() => {
                    document.getElementById('name').value = '';
                    document.getElementById('phone').value = '';
                    document.getElementById('vin').value = '';
                    document.getElementById('products').value = '';
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
                <h1 className={"text_h3"}>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</h1>
                <form action={"/email"} method={"post"} id={"form"}>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="name" className="form-label">Имя *</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name"
                               placeholder={"Имя"} />
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="phone" className="form-label">Телефон *</label>
                        <input type="phone" className="form-control" id="phone" aria-describedby="emailHelp"
                               name={"phone"} placeholder={"Телефон"}/>
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="vin" className="form-label">VIN и марка авто *</label>
                        <input type="text" name={"vin"} className="form-control" id="vin" aria-describedby="emailHelp"
                               placeholder={"VIN и марка авто"} />
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="products" className="form-label">Запрашиваемые товары *</label>
                        <input type="text" className="form-control" id="products" aria-describedby="emailHelp"
                               name={"products"}
                              placeholder={"Запрашиваемые товары"}/>
                    </div>
                    <button type="submit" onClick={this.sendMessage.bind(this)}
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