

const weWorks =() => {
    return (
        <div className={"text_h4"}>
           <h1 style={{textDecoration:"underline", textAlign:"center"}}>КАК МЫ РАБОТАЕМ</h1>
            <table style={{backgroundColor:"white", color:"black", borderRadius: "15px", boxShadow: "10px 5px 5px red"}}>
              <tbody>
                <tr>
                    <td>1</td>
                    <td><img className={"img_ico"} src="./img/1010.png" alt=""/></td>
                    <td>Вы оставляете бесплатную заявку</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img className={"img_ico"} src="./img/8888.png" alt=""/></td>
                    <td>Наш менеджер связывается с вами</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img className={"img_ico"} src="./img/66666.jpg" alt=""/></td>
                    <td>Мы помогаем выбрать нужную вам деталь</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img className={"img_ico"} src="./img/77777.png" alt=""/></td>
                    <td>Мы доставляем ваш заказ в кратчайшие сроки</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img className={"img_ico"} src="./img/99999.png" alt=""/></td>
                    <td>Вы становитесь нашим постоянным клиентом</td>
                </tr>
              </tbody>
            </table>
        </div>
    );
}

export default weWorks;