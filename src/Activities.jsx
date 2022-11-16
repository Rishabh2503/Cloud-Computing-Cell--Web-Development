import React from "react";
import web from "../src/image/5.png";
import  Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import Slider from "./Components/Slider/Slider";
// import Carusel from "./Components/Activity/carusel";
import New from "./Components/Activity/New";
import New3 from "./Components/Activity/New3";
import New6 from "./Components/Activity/New6";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
const text = document.querySelector(".sec-text");

// const textLoad = () => {
// if(text){
//     setTimeout(() => {
//         text.textContent = "Think.";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "Develop.";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "Deploy.";
//     }, 8000); 
// }
// }
// const ram = 1000;
// textLoad();
// setInterval(textLoad, ram);

const Activities =() => {
    return (
        <>
        <Navbar />
        <section id="header" className="d-flex algin-items-center ">
        
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="contain">
                    <h1> <span className="text first-text">Events and Workshop we organize</span> </h1>
                    <h2 className="my-3"><span className="text sec-text">Depeloy.</span></h2>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img"><img src={web} className="img-fluid animated" alt="home img" />
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
         {/* <section>
         <BrowserRouter>
            <Switch>
        <Route exact path="css\src\Components\Activity\Slider.js" component={Carusel}/>
        <Route exact path="/new" component={New}/>
        <Route exact path="/new3" component={New3}/>
        <Route exact path="/new6" component={New6}/>
        </Switch>
        </BrowserRouter>
        </section>  */}
        {/* <section>
        <New />
        <New3 />
        <New6 />
        </section> */}
        {/* <section> <Carusel /></section> */}
        <section>
            <Footer />
        </section>
        </>
    )
}
export default Activities;