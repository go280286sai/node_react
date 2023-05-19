import React from "react"
import axios from "axios";
import {Link} from "react-router-dom";
import Validate from "../Validate";


class Message extends React.Component {
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
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;
        if (name.length < 2) {
            alert("Введите Ваше имя")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
   if (Validate.isValidEmail(email)==false) {
            alert("Введите правильно e-mail")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }
        if (description.length < 2) {
            alert("Введите текст сообщения")
            this.setState({valid:false})
        } else {this.setState({valid:true}) }

        if (this.state.valid === true) {
            const data = {
                target: "email",
                email: email,
                subject: "Сообщение пользователя",
                text: `Имя: ${name}
Текст сообщения: ${description}`
            }
            await axios.post(url, data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .then(() => {
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('description').value = '';
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
                <h1 className={"text_h3"}>Отправить сообщение</h1>
                <form action={"/email"} method={"post"} id={"form"}>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="name" className="form-label">Имя *</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name"
                               placeholder={"Имя"}/>
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="email" className="form-label">E-mail *</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                               name={"email"} placeholder={"E-mail "}/>
                    </div>
                    <div className="mb-3 text_h4" style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "15px",
                        boxShadow: "10px 5px 5px red"
                    }}>
                        <label htmlFor="description" className="form-label">Текст сообщения *</label>
                        <input type="text" className="form-control" id="description" aria-describedby="emailHelp"
                               name={"description"}
                               placeholder={"Текст сообщения"}/>
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

export default Message;