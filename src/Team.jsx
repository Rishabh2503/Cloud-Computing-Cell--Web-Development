import React, { useState } from "react";
import web from "../src/image/6.png";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Manya from "./image/society/Manya Chaudhary ML and uiux.jpeg";
import Aagiya from "./image/society/Aagiya Singh web d.jpeg";
import Anishkha from "./image/society/Anishkha chaudhary app d and uiux.jpeg";
import Anjani from "./image/society/Anjani Singhal app and uiux.jpeg";
import Kamakshi from "./image/society/Kamakshi Vashista front end.jpeg";
import Mrityunjay from "./image/society/Mrityunjay Pandey Web d and CP.jpeg";
import Nidhi from "./image/society/Nidhi solanki ML.jpeg";
import Sachin from "./image/society/Sachin kumar web d.jpeg";
import Samiksha from "./image/society/Samiksha jain front end.jpeg";
import Shashwat from "./image/society/Shashwat.jpeg";
import Siddharth from "./image/society/Siddharth Srivastava ML.jpeg";
import Nishtha from "./image/society/Nishtha Pandey ML.jpeg";
import Kartikay from "./image/society/Kartikay Singhal ML.jpeg";
import Harshit from "./image/society/Harshit.jpeg";
import Shailaja from "./image/society/Shailaja Pal.jpeg";
import CardData from "../src/Components/Card/cardData";
import Tanish from "./image/society/tanish.jpg";
const Team = () => {
  const [tabIndex, setTabIndex] = useState(1);
  {
    return (
      <>
        <Navbar />
        <section id="header" className="d-flex algin-items-center ">
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className="blast-text4">
                <span className="text3">The Cloud Computing Cell is more than just a scientific community,</span>
                <br />
                <span className="text9">It is a Family.</span>
</h2>
                  </div>
                  <div className="col-lg-6 order-lg-2 header-img">
                    <img
                      src={web}
                      className="img-fluid animated"
                      alt="home img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ourteam reveal">
          <div className="col-md-12">
            <div className="section1-title text-container">
              <h1 className="d-card-title">Our Team</h1>
            </div>
          </div>
          <div className="mt-3 team-bt">
            <button className="btn-get-started" onClick={() => setTabIndex(1)}>
              4<sup>nd</sup> Year
            </button>
            <button className="btn-get-started" onClick={() => setTabIndex(2)}>
              3<sup>nd</sup> Year
            </button>
            <button className="btn-get-started" onClick={() => setTabIndex(3)}>
              2<sup>nd</sup> Year
            </button>
          </div>
          {tabIndex === 1 && (
            <div className="team1-area reveal">
              <div className="team-container">
                <div className="row" id="fourth-year">
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Manya} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Manya Chaudhary</h3>
                          <p>Machine Learning & UI/Ux</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/m.a.n.y.aa_/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Kartikay} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Kartikay Singhal </h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/kartikay_singhal/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Aagiya} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Aagiya Singh</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/_.aagiyasingh/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Samiksha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Samiksha Jain</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/samiksha7302/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabIndex === 2 && (
            <div className="team1-area reveal">
              <div className="team-container" id="thirdyear">
                <div className="row">
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Sachin} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Sachin Kumar</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/_sachinkrr/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Mrityunjay} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Mrityunjay Pandey</h3>
                          <p>Web Developer & CP</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/_.m.n.p._/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3rd memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Kamakshi} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Kamakshi Vashista</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/kamakshivashista/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 4th memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Harshit} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Harshit Saxena</h3>
                          <p>Web Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/harshit_saxena_1107/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Shashwat} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Shashwat Pandey</h3>
                          <p>Web Developer & CP</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/shashwat144/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Tanish} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Tanishq Agarwal</h3>
                          <p>App Developer</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/_ishq_tan_/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3rd memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Anishkha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Anishkha Chaudhary</h3>
                          <p>App Developer & Ui/Ux</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 4th memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Anjani} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Anjani Singhal</h3>
                          <p>App Developer & Ui/Ux</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/singhal_anjani/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Nidhi} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Nidhi Solanki</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/nidhi_26_s/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 2nd member */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Siddharth} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Siddharth Srivastava</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/siddharth_0826/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3rd memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Nishtha} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Nishtha Pandey</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 3rd memeber */}
                  <div className="col-md-2">
                    <div className="single1-team">
                      <div className="team1-img">
                        <img src={Shailaja} alt="" width={255} height={263} />
                      </div>
                      <div className="team1-content">
                        <div className="team1-info">
                          <h3>Shailaja Pal</h3>
                          <p>Machine Learning</p>
                        </div>
                        <p className="team1-text">
                          <i
                            className="fa-brands fa-facebook fa-2x "
                            id="iconanimate"
                          ></i>
                          <a href="https://www.instagram.com/shailaja_ayra/?next=%2F">
                            <i
                              className="fa-brands fa-instagram fa-2x "
                              id="iconanimate"
                            ></i>
                          </a>
                          <i
                            className="fa-brands fa-linkedin fa-2x "
                            id="iconanimate"
                          ></i>
                          <i
                            className="fa-brands fa-github fa-2x "
                            id="iconanimate"
                          ></i>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tabIndex === 3 && (
            <div>
              <h3 className="d-card-title">Presenting This Web site to You</h3>
            </div>
          )}
        </section>
        <section className="Aluminiarea2 reveal">
          <h1 className="d-card-title"> ALUMNI</h1>
          <div className="row--img">{CardData}</div>
        </section>

        <section>
          <Footer />
        </section>
      </>
    );
  }
};
export default Team;
