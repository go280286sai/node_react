import React, { useState } from 'react';

const Price = () => {
    const [isOpen_1, setIsOpen_1] = useState(false);
    const [isOpen_2, setIsOpen_2] = useState(false);
    const [isOpen_3, setIsOpen_3] = useState(false);
    const [isOpen_4, setIsOpen_4] = useState(false);
    const [isOpen_5, setIsOpen_5] = useState(false);
    const [isOpen_6, setIsOpen_6] = useState(false);
    const [isOpen_7, setIsOpen_7] = useState(false);
    const [isOpen_8, setIsOpen_8] = useState(false);
    const [isOpen_9, setIsOpen_9] = useState(false);
    const [isOpen_10, setIsOpen_10] = useState(false);
    const [isOpen_11, setIsOpen_11] = useState(false);

    const toggleDropdown_1 = () => {
        setIsOpen_1(!isOpen_1);
    };const toggleDropdown_2 = () => {
        setIsOpen_2(!isOpen_2);
    };const toggleDropdown_3 = () => {
        setIsOpen_3(!isOpen_3);
    };const toggleDropdown_4 = () => {
        setIsOpen_4(!isOpen_4);
    };const toggleDropdown_5 = () => {
        setIsOpen_5(!isOpen_5);
    };const toggleDropdown_6 = () => {
        setIsOpen_6(!isOpen_6);
    };const toggleDropdown_7 = () => {
        setIsOpen_7(!isOpen_7);
    };const toggleDropdown_8 = () => {
        setIsOpen_8(!isOpen_8);
    };const toggleDropdown_9 = () => {
        setIsOpen_9(!isOpen_9);
    };const toggleDropdown_10 = () => {
        setIsOpen_10(!isOpen_10);
    };const toggleDropdown_11 = () => {
        setIsOpen_11(!isOpen_11);
    };

    return (
        <div className={"img_w"} style={{marginTop:"10px"}}>
            <h1>Наши цены:</h1>
            <button onClick={toggleDropdown_1} style={{backgroundColor:"green", color:"white"}}>Техническое обслуживание</button>
            {isOpen_1 && (
                <table >
                <thead style={{backgroundColor:"orange", border: "5px"}}>
                <tr>
                    <th>Услуги</th>
                    <th style={{paddingRight:"25px"}}>Старая цена</th>
                    <th>Акция</th>
                </tr>
                </thead>
                    <tbody>
                <tr>
                    <td>Замена масла в двигателе</td>
                    <td>от 500</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Экспресс-замена масла</td>
                    <td>от 700</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Замена масла МКПП</td>
                    <td>от 700</td>
                    <td>от 400</td>
                </tr>
                <tr>
                    <td>Замена масла раздаточной коробки автомобиля</td>
                    <td>от 700</td>
                    <td>от 400</td>
                </tr>
                <tr>
                    <td>Замена масла АКПП</td>
                    <td>от 1600</td>
                    <td>от 1300</td>
                </tr>
                <tr>
                    <td>Замена масла АКПП со снятием поддона</td>
                    <td>от 2300</td>
                    <td>от 2000</td>
                </tr>
                <tr>
                    <td>Замена масла в мосту автомобиля</td>
                    <td>от 500</td>
                    <td>от 400</td>
                </tr>
                <tr>
                    <td>Замена свечей зажигания</td>
                    <td>от 400</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена свечей накаливания</td>
                    <td>от 600</td>
                    <td>от 500</td>
                </tr>
                <tr>
                    <td>Замена топливного фильтра</td>
                    <td>от 250</td>
                    <td>от 100</td>
                </tr>
                <tr>
                    <td>Замена воздушного фильтра</td>
                    <td>от 200</td>
                    <td>от 100</td>
                </tr>
                <tr>
                    <td>Замена фильтра салона</td>
                    <td>от 300</td>
                    <td>от 100</td>
                </tr>
                <tr>
                    <td>Замена проводов высокого напряжения в автомобиле</td>
                    <td>от 400</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена охлаждающей жидкости в автомобиле</td>
                    <td>от 500</td>
                    <td>от 400</td>
                </tr>
                <tr>
                    <td>Полная замена тормозной жидкости в автомобиле</td>
                    <td>от 1000</td>
                    <td>от 600</td>
                </tr>
                <tr>
                    <td>Замена жидкости ГУР</td>
                    <td>от 600</td>
                    <td>от 400</td>
                </tr>
                <tr>
                    <td>Полное ТО автомобиля</td>
                    <td>от 1500</td>
                    <td>от 1200</td>
                </tr>
                <tr>
                    <td>Диагностика перед покупкой</td>
                    <td>от 1100</td>
                    <td>от 1000</td>
                </tr>
                <tr>
                    <td>Диагностика перед покупкой с выездом специалиста</td>
                    <td></td>
                    <td>по договор.</td>
                </tr>
                </tbody>
                </table>
            )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_2} style={{backgroundColor:"green", color:"white"}}>Ремонт двигателя авто</button>
            {isOpen_2 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                <tbody>
                <tr>
                    <td>Капитальный ремонт двигателя</td>
                    <td>от 25000</td>
                    <td>от 20000</td>
                </tr>
                <tr>
                    <td>Снятие и установка двигателя</td>
                    <td>от 10000</td>
                    <td>от 6000</td>
                </tr>
                <tr>
                    <td>Снятие и установка ГБЦ двигателя</td>
                    <td>от 7000</td>
                    <td>от 6400</td>
                </tr>
                <tr>
                    <td>Промывка форсунок и дросселя бензинового двигателя</td>
                    <td>от 2000</td>
                    <td>от 1800</td>
                </tr>
                <tr>
                    <td>Промывка форсунок и ТНВД дизельного двигателя</td>
                    <td>от 2000</td>
                    <td>от 1800</td>
                </tr>
                <tr>
                    <td>Промывка инжектора</td>
                    <td>от2000</td>
                    <td>от 1800</td>
                </tr>
                <tr>
                    <td>Ремонт ГБЦ (снятой)</td>
                    <td>от 4000</td>
                    <td>от 2000</td>
                </tr>
                <tr>
                    <td>Замена масла в двигателе</td>
                    <td>от 500</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Экспресс-замена масла</td>
                    <td>от 700</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Полная диагностика двигателя(как отдельная услуга)</td>
                    <td>от 1000</td>
                    <td>от 800</td>
                </tr>
                <tr>
                    <td>Замер давления топливной системы</td>
                    <td>от 400</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Замер компрессии в двигателе</td>
                    <td>от 600</td>
                    <td>от 500</td>
                </tr>
                <tr>
                    <td>Замена маслосъёмных колпачков (со съемом/установкой ГБЦ)</td>
                    <td>от 10000</td>
                    <td>от 8000</td>
                </tr>
                <tr>
                    <td>Замена маслосъёмных колпачков (без съема/установки ГБЦ)</td>
                    <td>от 3500</td>
                    <td>от 3000</td>
                </tr>
                <tr>
                    <td>Ремонт блока управления двигателем</td>
                    <td>от10000</td>
                    <td>от 8000</td>
                </tr>
                <tr>
                    <td>Замена ремня ГРМ</td>
                    <td>от 3000</td>
                    <td>от 2500</td>
                </tr>
                <tr>
                    <td>Промывка топливной системы бензинового двигателя</td>
                    <td>от 2000</td>
                    <td>от 1800</td>
                </tr>
                <tr>
                    <td>Регулировка клапанов</td>
                    <td>от 1500</td>
                    <td>от 1200</td>
                </tr>
                <tr>
                    <td>Замена подушки двигателя</td>
                    <td>от 700</td>
                    <td>от 600</td>
                </tr>
                <tr>
                    <td>Замена форсунок</td>
                    <td>от 600</td>
                    <td>от 500</td>
                </tr>
                <tr>
                    <td>Замена цепи ГРМ</td>
                    <td>от 4500</td>
                    <td>от 4000</td>
                </tr>
                <tr>
                    <td>Промывка двигателя</td>
                    <td>от 300</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена масляного насоса (со съемом/установкой ГРМ)</td>
                    <td>от 4400</td>
                    <td>от 4000</td>
                </tr>
                <tr>
                    <td>Замена бензонасоса</td>
                    <td>от 1100</td>
                    <td>от 1000</td>
                </tr>
                <tr>
                    <td>Замена бензонасоса со снятием бака</td>
                    <td>от 2300</td>
                    <td>от 2000</td>
                </tr>
                <tr>
                    <td>Замена прокладки впускного коллектора</td>
                    <td>от 1100</td>
                    <td>от 1000</td>
                </tr>
                <tr>
                    <td>Замена выпускного коллектора</td>
                    <td>от 1100</td>
                    <td>от 900</td>
                </tr>
                <tr>
                    <td>Замена впускного коллектора</td>
                    <td>от 1100</td>
                    <td>от 900</td>
                </tr>
                <tr>
                    <td>Замена прокладки клапанной крышки</td>
                    <td>от 600</td>
                    <td>от 500</td>
                </tr>
                <tr>
                    <td>Замена регулятора давления топлива</td>
                    <td>от 400</td>
                    <td>от 300</td>
                </tr>
                <tr>
                    <td>Замена проводов высокого напряжения в автомобиле</td>
                    <td>от 300</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена свечей зажигания</td>
                    <td>от 400</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена опоры двигателя</td>
                    <td>от 900</td>
                    <td>от 600</td>
                </tr>
                <tr>
                    <td>Замена переднего сальника коленвала</td>
                    <td>от 2100</td>
                    <td>от 2000</td>
                </tr>
                <tr>
                    <td>Замена заднего сальника коленвала</td>
                    <td>от 3400</td>
                    <td>от 3300</td>
                </tr>
                <tr>
                    <td>Замена приводного ремня</td>
                    <td>от 300</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена натяжителя приводного ремня</td>
                    <td>от 350</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена ролика приводного ремня</td>
                    <td>от 350</td>
                    <td>от 200</td>
                </tr>
                <tr>
                    <td>Замена прокладки поддона</td>
                    <td>от 1300</td>
                    <td>от 900</td>
                </tr>
                <tr>
                    <td>Замена прокладки картера</td>
                    <td>от 2000</td>
                    <td>от 1000</td>
                </tr>
                <tr>
                    <td>Снятие и установка защиты картера</td>
                    <td>от 300</td>
                    <td>от 200</td>
                </tr>
                </tbody>
                </table>
            )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_3} style={{backgroundColor:"green", color:"white"}}>Ремонт трансмиссии</button>
            {isOpen_3 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Замена комплекта сцепления</td>
                        <td>от 3500</td>
                        <td>от 3000</td>
                    </tr>
                    <tr>
                        <td>Замена выжимного подшипника</td>
                        <td>от 3500</td>
                        <td>от 3000</td>
                    </tr>
                    <tr>
                        <td>Ремонт МКПП полный со снятием КПП</td>
                        <td>от 10000</td>
                        <td>от 9000</td>
                    </tr>
                    <tr>
                        <td>Замена кулисы КПП</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена масла МКПП</td>
                        <td>от 700</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена масла раздаточной коробки автомобиля</td>
                        <td>от 700</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена масла АКПП</td>
                        <td>от 1600</td>
                        <td>от 1300</td>
                    </tr>
                    <tr>
                        <td>Замена масла АКПП со снятием поддона</td>
                        <td>от 2300</td>
                        <td>от 2000</td>
                    </tr>
                    <tr>
                        <td>Замена МКПП</td>
                        <td>от 4500</td>
                        <td>от 4000</td>
                    </tr>
                    <tr>
                        <td>Замена АКПП</td>
                        <td>от 6500</td>
                        <td>от 6000</td>
                    </tr>
                    <tr>
                        <td>Замена сальника ШРУСа (за 1 шт.)</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена сальников КПП (за 1 шт.)</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена раздаточной коробки</td>
                        <td>от 2200</td>
                        <td>от 2000</td>
                    </tr>
                    <tr>
                        <td>Замена масла в редукторе</td>
                        <td>от 500</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена масла раздаточной коробки</td>
                        <td>от 600</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Ремонт карданных валов</td>
                        <td>от 1700</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена карданного вала</td>
                        <td>от 700</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена главного цилиндра сцепления</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена рабочего цилиндра сцепления</td>
                        <td>от 800</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена троса сцепления</td>
                        <td>от 600</td>
                        <td>от 500</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_4} style={{backgroundColor:"green", color:"white"}}>Ремонт подвески</button>
            {isOpen_4 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Диагностика подвески</td>
                        <td>от 200</td>
                        <td>от 0</td>
                    </tr>
                    <tr>
                        <td>Замена амортизаторов подвески (за 1 шт.)</td>
                        <td>от 1300</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена пружин подвески задних(за 1 шт.)</td>
                        <td>от 600</td>
                        <td>от 450</td>
                    </tr>
                    <tr>
                        <td>Замена опорного подшипника</td>
                        <td>от 1300</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена сайлентблоков задней балки (за кт.)</td>
                        <td>от 2000</td>
                        <td>от 1600</td>
                    </tr>
                    <tr>
                        <td>Замена шаровой опоры</td>
                        <td>от 650</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Снятие и установка рычага подвески</td>
                        <td>от 750</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена сайлентблоков рычагов (за 1 шт.)</td>
                        <td>от 450</td>
                        <td>от 300</td>
                    </tr>
                    <tr>
                        <td>Замена втулок и стоек стабилизатора (за кт.)</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена стойки стабилизатора</td>
                        <td>от 300</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена задних амортизаторов (за 1 шт.)</td>
                        <td>от 650</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена ступицы</td>
                        <td>от 900</td>
                        <td>от 800</td>
                    </tr>
                    <tr>
                        <td>Замена подшипника ступицы</td>
                        <td>от 1300</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена переднего амортизатора</td>
                        <td>от 1250</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена опоры амортизатора</td>
                        <td>от 1250</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена передней пружины</td>
                        <td>от 1250</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена поворотного кулака</td>
                        <td>от 1300</td>
                        <td>от 800</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_5} style={{backgroundColor:"green", color:"white"}}>Ремонт электрооборудования в авто</button>
            {isOpen_5 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Замена автомобильного генератора</td>
                        <td>от 900</td>
                        <td>от 800</td>
                    </tr>
                    <tr>
                        <td>Ремонт автомобильного генератора</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена проводки в автомобиле</td>
                        <td>от 13000</td>
                        <td>от 12000</td>
                    </tr>
                    <tr>
                        <td>Ремонт стартера автомобиля</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена стартера автомобиля</td>
                        <td>от 700</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Ремонт стеклоподъемника в автомобиле</td>
                        <td>от 1500</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена стеклоподъемника в автомобиле</td>
                        <td>от 2000</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена фар автомобиля (за 1 шт.)</td>
                        <td>от 500</td>
                        <td>от 300</td>
                    </tr>
                    <tr>
                        <td>Замена замка зажигания автомобиля</td>
                        <td>от 1600</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена личинки замка зажигания</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена ламп габаритных огней на автомобиле</td>
                        <td>от 200</td>
                        <td>от 150</td>
                    </tr>
                    <tr>
                        <td>Замена лампы ближнего света на автомобиле</td>
                        <td>от 200</td>
                        <td>от 150</td>
                    </tr>
                    <tr>
                        <td>Замена электронного блока управления в автомобиле</td>
                        <td>от 1600</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена датчика положения распредвала вавтомобиле</td>
                        <td>от 600</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена датчика положения коленвала в автомобиле</td>
                        <td>от 800</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена механизма стеклоочистителя в автомобиле</td>
                        <td>от 1300</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена катушки зажигания автомобиля</td>
                        <td>от 700</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена форсунки омывателя лобового стекла в автомобиле</td>
                        <td>от 300</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена проводов высокого напряжения в автомобиле</td>
                        <td>от 400</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена датчика кислорода в автомобиле</td>
                        <td>от 800</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена насоса омывателя</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена датчика скорости автомобиля</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_6} style={{backgroundColor:"green", color:"white"}}>Ремонт тормозной системы</button>
            {isOpen_6 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Замена передних тормозных колодок</td>
                        <td>от 500</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена передних тормозных колодок</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена задних тормозных колодок дисковые</td>
                        <td>от 600</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена задних тормозных колодок барабанные</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Ремонт суппорта (за 1 поршень)</td>
                        <td>от 650</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена тормозных барабанов</td>
                        <td>от 700</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена тормозных суппортов</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена тормозного шланга+прокачка колеса</td>
                        <td>от 700</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена вакуумного усилителя</td>
                        <td>от 1500</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена тормозной жидкости</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена колодок стояночного тормоза</td>
                        <td>от1300</td>
                        <td>от 1200</td>
                    </tr>
                    <tr>
                        <td>Замена тросов ручного тормоза с регулировкой</td>
                        <td>от1600</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена главного тормозного цилиндра</td>
                        <td>от 1200</td>
                        <td>от 1100</td>
                    </tr>
                    <tr>
                        <td>Регулировка стояночного тормоза</td>
                        <td>от 400</td>
                        <td>от 300</td>
                    </tr>
                    <tr>
                        <td>Замена тормозных рабочих цилиндров (за 1 шт.)</td>
                        <td>от 600</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена датчика ABS</td>
                        <td>от 350</td>
                        <td>от 300</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_7} style={{backgroundColor:"green", color:"white"}}>Ремонт рулевого управления</button>
            {isOpen_7 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Ремонт рулевой рейки (со снятием и установкой)</td>
                        <td>от 6000</td>
                        <td>от 5000</td>
                    </tr>
                    <tr>
                        <td>Ремонт гидравлической рулевой рейки (со снятием и установкой)</td>
                        <td>от 7000</td>
                        <td>от 6000</td>
                    </tr>
                    <tr>
                        <td>Ремонт насоса гидроусилителя</td>
                        <td>от 1700</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена насоса гидроусилителя</td>
                        <td>от 1200</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена рулевой рейки</td>
                        <td>от 2200</td>
                        <td>от 2000</td>
                    </tr>
                    <tr>
                        <td>Ремонт кардана рулевого вала</td>
                        <td>от 2000</td>
                        <td>от 1800</td>
                    </tr>
                    <tr>
                        <td>Замена рулевого наконечника (за 1 шт.)</td>
                        <td>от 250</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена рулевой тяги</td>
                        <td>от 800</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена жидкости ГУР с прокачкой</td>
                        <td>от 700</td>
                        <td>от 400</td>
                    </tr>
                    <tr>
                        <td>Замена жидкости ЭГУР с прокачкой</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена рулевой колонки</td>
                        <td>от 2000</td>
                        <td>от 1500</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_8} style={{backgroundColor:"green", color:"white"}}>Ремонт ходовой автомобиля</button>
            {isOpen_8 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Снятие и установка защиты картера</td>
                        <td>от 300</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена внутреннего ШРУСа</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена наружного ШРУСа</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена пыльника ШРУСа</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Регулировка ступичного подшипника</td>
                        <td>от 500</td>
                        <td>от 300</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_9} style={{backgroundColor:"green", color:"white"}}>Ремонт выхлопной системы</button>
            {isOpen_9 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Удаление катализатора</td>
                        <td>от 2500</td>
                        <td>от 2400</td>
                    </tr>
                    <tr>
                        <td>Замена глушителя</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена гофры глушителя</td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена приёмной трубы глушителя</td>
                        <td>от 1500</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена резонатора</td>
                        <td>от 1500</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Замена прокладки приёмной трубки</td>
                        <td>от 1000</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Сварка глушителя</td>
                        <td>от 1000</td>
                        <td>от 500</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_10} style={{backgroundColor:"green", color:"white"}}>Ремонт охлаждения и отопления в авто</button>
            {isOpen_10 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Замена вентилятора охлаждения двигателя</td>
                        <td>от 700</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Промывкасистемы охлаждения</td>
                        <td>от 1000</td>
                        <td>от 600</td>
                    </tr>
                    <tr>
                        <td>Замена радиатора охлаждения</td>
                        <td>от 1000</td>
                        <td>от 800</td>
                    </tr>
                    <tr>
                        <td>Замена радиатора печки</td>
                        <td>от 5000</td>
                        <td>от 3000</td>
                    </tr>
                    <tr>
                        <td>Замена подшипника компрессора автокондиционера</td>
                        <td>от 1700</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена патрубков системы охлаждения (за 1 шт.)</td>
                        <td>от 300</td>
                        <td>от 200</td>
                    </tr>
                    <tr>
                        <td>Замена термостата</td>
                        <td>от 800</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена охлаждающей жидкости в автомобиле</td>
                        <td>от 500</td>
                        <td>от 400</td>
                    </tr>
                    </tbody>
                </table>
                )}
            <br/>
            <br/>
            <button onClick={toggleDropdown_11} style={{backgroundColor:"green", color:"white"}}>Кузовной ремонт</button>
            {isOpen_11 && (
                <table>
                    <thead style={{backgroundColor:"orange", border: "5px"}}>
                    <tr>
                        <th>Услуги</th>
                        <th style={{paddingRight:"25px"}}>Старая цена</th>
                        <th>Акция</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Сварочные работы (сварка полуавтомат, аргон, плазморез –железо, сталь, нержавеющая сталь, алюминий, чугун, латунь, пластик)
                        </td>
                        <td>от 1000</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена стеклоподъёмника</td>
                        <td>от 2000</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена замков двери (за 1 шт.)
                        </td>
                        <td>от 1300</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Снять/поставить обшивку двери
                        </td>
                        <td>от 500</td>
                        <td>от 300</td>
                    </tr>
                    <tr>
                        <td>Снять/поставить бампер передний
                        </td>
                        <td>от 1200</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Снять/поставить бампер задний
                        </td>
                        <td>от 1200</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Снять/поставить крыло переднее
                        </td>
                        <td>от 1000</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена бокового стекла автомобиля
                        </td>
                        <td>от 1700</td>
                        <td>от 1500</td>
                    </tr>
                    <tr>
                        <td>Замена зеркала бокового вида
                        </td>
                        <td>от 600</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Замена форсунки омывателя лобового стекла
                        </td>
                        <td>от 400</td>
                        <td>от 200
                        </td>
                    </tr>
                    <tr>
                        <td>Замена порога боковины авто в сборе
                        </td>
                        <td>от 3500</td>
                        <td>от 3000
                        </td>
                    </tr>
                    <tr>
                        <td>Замена капота автомобиля с регулировкой замков
                        </td>
                        <td>от 1500</td>
                        <td>от 800
                        </td>
                    </tr>
                    <tr>
                        <td>Замена крышки багажника автомобиля с регулировкой замков
                        </td>
                        <td>от 1000</td>
                        <td>от 800</td>
                    </tr>
                    <tr>
                        <td>Замена лонжерона переднего с брызговиком
                        </td>
                        <td>от 3800</td>
                        <td>от 3500</td>
                    </tr>
                    <tr>
                        <td>Восстановление помутневших пластиковых фар иномарок (за 1шт.)
                        </td>
                        <td>от 1100</td>
                        <td>от 1000</td>
                    </tr>
                    <tr>
                        <td>Рихтовка за единицу
                        </td>
                        <td>от 700</td>
                        <td>от 500</td>
                    </tr>
                    <tr>
                        <td>Покраска за деталь под ключ (материал, снятие/установка, полировка, регулировка)</td>
                    </tr>
                    <tr>
                        <td>Покраска переднего крыла автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска заднего крыла автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска заднего бампера авто
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска переднего бампера авто
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска капота автомобиля</td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска крышки багажника автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска передней двери авто
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска задней двери авто</td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска передней панели автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска задней панели автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска панели задка автомобиля
                        </td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    <tr>
                        <td>Покраска крыши автомобиля</td>
                        <td>от 9000</td>
                        <td>от 7000</td>
                    </tr>
                    </tbody>
                </table>
                )}
        </div>
    );
};

export default Price;







