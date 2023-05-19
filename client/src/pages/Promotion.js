import React from 'react';
import {Link} from "react-router-dom";

const promotion = () => {
    return (
        <div className={"img_w"}>
            <div className={"promotion_1"}>
                <table>
                    <tbody>
                    <tr>
                        <td className={"promotion_2"} colSpan={5}>Сломался автомобиль? Встала работа? Нет времени на поиск нужных автозапчастей?</td>
                    </tr>
                    <tr>
                        <td className={"promotion_3"}  colSpan={5}>Больше 100 000 запасных частей для Вашего авто</td>
                    </tr>
                    <tr>
                        <td className={"td_ok"}></td>
                        <td className={"promotion_4"}>Бесплатная доставка от 1 дня</td>
                        <td className={"td_ok"}></td>
                        <td className={"promotion_4"}>Возможность возврата</td>
                        <td className={"td_ok"}></td>
                        <td className={"promotion_4"}>Гарантия лучшей цены</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className={"promotion_5"}>
                      АКЦИЯ!
            </div>
            <strong className={"text_h1"}>РЕМОНТИРУЙТЕ АВТОМОБИЛЬ ВЫГОДНО*</strong>
            <div className={"div_text_align"}>
                <h3 className={"text_h2"}> ДО -50% НА РЕМОНТ </h3>
                <h5 className={"text_h3"}>Успей до 31.05</h5>
                <h4>*При заказе запчастей у нас</h4>
                <h2> <Link to="/price">Цены</Link></h2>
                <br/>
                <div>
                    <table style={{
                        backgroundColor: "white",
                        color: "black",
                        borderRadius: "20px",
                        boxShadow: "10px 5px 5px red",
                        marginBottom: "20px"
                    }}>
                        <tbody>
                        <tr>
                            <td className={"img_95"}></td>
                            <td>
                                <h5 className={"text_h4"}> Заказываем без предоплаты!!!</h5>
                                <h5 className={"text_h4"}> На сумму до 15000 – для постоянных клиентов </h5>
                                <h5 className={"text_h4"}> На сумму до 5000  – для новых клиентов</h5>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default promotion