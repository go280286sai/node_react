import React from 'react';
import {Link} from "react-router-dom";

const head = ()=>{
return <div>
    <div className={"div_bg_head"}>
        <table>
            <tbody>
            <tr>
                <td className={"div_bg_head_4"}>Лонжерон</td>
                <td className={"div_bg_head_3"}>Автомагазин + Автомастерская в Харькове</td>
            </tr>
            <tr>
                <td rowSpan={2} className={"div_bg_head_1"}></td>
                <td className={"div_bg_head_2"}>Запчасти, масла, шины в наличии и под заказ. Установка и ремонт с гарантией 100%</td>
            </tr>
            <tr><td className={"div_bg_head_5"}>Нажми на номер, ответим в Viber. <br/>Или позвоните нам. Найдем любую запчасть
<br/>
                <a href="phone:+380971376810">+38 (097) 137-68-10</a> </td></tr>
            </tbody>
        </table>
    </div>

    <header>
        <div className={"div_menu"}>
           <Link to="/" className={"mainmenubtn dropdown"}>Главная</Link>
           <Link to="/akcia" className={"mainmenubtn dropdown"}>Акция</Link>
           <Link to="/price" className={"mainmenubtn dropdown"}>Цены</Link>
            <Link to="/location" className={"mainmenubtn dropdown"}>Контакты</Link>
</div>
    </header>
</div>
}

export default head