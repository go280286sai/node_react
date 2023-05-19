import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slideIndex:0,
            comments:[
                {img:'./img/users/callback_1.png', text: 'Делали мне у них в автосервисе капитальный ремонт двигателя, ' +
                        'расценки разумные. Попутно мне ещё устранили ' +
                        'проблему с тормазами, задние закусывало. По срокам не торопил, но сделали всё равно' +
                        'быстро, а главное качественно.'},
                {img:'./img/users/callback_2.png', text: 'Магазин очень хороший, вежливый продавец, качественный товар ' +
                        'по недорогой цене, всегда помогут, подскажут что до как.'},
                {img:'./img/users/callback_3.png', text: 'Ребята вежливые, покупал расходники для мазды, оставил запрос через сайт, ' +
                        'менеджер связался со мной минут через 20. Товар получил на дом в оговоренный срок, ' +
                        'за доставку отдельно не платил.'},
            ]
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({slideIndex: (this.state.slideIndex + 1) % this.state.comments.length}), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div className={"div_text_align"}>
                <br/>
                <h1>Отзывы наших клиентов</h1>

                <table style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "15px",
                    boxShadow: "10px 5px 5px red",
                    width: "70%",
                    marginBottom: "40px"
                }}>
                    <tbody>
                    <tr>
                        <td><img className={"img_client"} src={this.state.comments[this.state.slideIndex].img} alt=""/></td>
                        <td className={"text_comment"}> {this.state.comments[this.state.slideIndex].text}
                        </td>
                    </tr></tbody>
                </table>
            </div>
        );
    }
}


export default Comments;