import React from 'react';

const footer = ()=>{
    return (
        <div className={'div_text_align'}>
            <h3><a href="phone:+380971376810">+38 (097) 137-68-10</a></h3>

            <h6><a href="office@atp16363.org.ua">office@atp16363.org.ua</a></h6>

            <h6>Работаем <strong style={{textDecoration:"underline", color:"red"}}>9.00 - 17.00</strong></h6>
            <h6>Выходной - <strong style={{color:"red", textDecoration:"underline"}}>Воскресенье</strong></h6>

            <h6>Заказы принимаем <strong style={{color:"red"}}>24/7</strong></h6>

        </div>
    );
}

export default footer;


