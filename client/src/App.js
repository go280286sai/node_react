import './App.css';
import Head from "./pages/Head";
import Promotion from "./pages/Promotion";
import ToBuy from "./pages/ToBuy";
import Footer from "./pages/footer";
import WeWorks from "./pages/WeWorks";
import Comments from "./pages/Comments";
import Order from "./pages/Order";
import {Routes, Route} from "react-router-dom";
import Akcia from "./pages/Akcia";
import Location from "./pages/Location";
import Policy from "./pages/Policy";
import Price from "./pages/Price";
import Message from "./pages/Message";
import Callback from "./pages/Callback";


function App() {
    return (
        <div className={"App-header"}>
            <Routes>
                <Route path="/" element={[
                    <Head/>,
                    <Promotion/>,
                    <ToBuy/>,
                    <WeWorks/>,
                    <Order/>,
                    <Comments/>,
                    <Callback/>,
                    <Footer/>
                ]
                }/>
                <Route path={"/akcia"} element={[
                    <Head/>,
                    <Akcia/>,
                    <Order/>,
                    <Footer/>
                ]}/>
                <Route path={"/location"} element={[
                    <Head/>,
                    <Location/>,
                    <Message/>,
                    <Footer/>
                ]}/>
                <Route path={"/policy"} element={[
                    <Head/>,
                    <Policy/>,
                    <Footer/>
                ]}/>
                <Route path={"/price"} element={[
                    <Head/>,
                     <Location/>,
                    <Price/>,
                    <Order/>,
                    <Footer/>
                ]}/>

            </Routes>
        </div>
    );
}

export default App;
