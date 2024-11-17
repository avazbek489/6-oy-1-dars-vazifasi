import "./App.css";
import bacImg1 from "./assets/images/bac-img1.png";
import bacImg2 from "./assets/images/bac-img2.png";
import bacImg3 from "./assets/images/bac-img3.png";
import ease from "./assets/images/easy.svg";
import enhan from "./assets/images/enhan.svg";
import exper from "./assets/images/exper.svg";

function App() {
  return (
    <div>
      {/* Header */}
      <div className="header">
        <div className="container header__container">
          <div className="head-left">
            <h3>myteam</h3>
            <div className="home">
              <a href="#">home</a>
              <a href="#">about</a>
            </div>
          </div>
          <div className="head-right">
            <button className="head-btn">contact us</button>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className="hero">
        <div className="container hero__container">
          <h1 className="hero-tittle">
            Find the best <span>talent</span>
          </h1>
          <p className="hero-desc">
            Finding the right people and building high performing teams can be
            hard. Most companies arent tapping into the abundance of global
            talent. Were about to change that.
          </p>
          <img width={338} height={100} className="bac1" src={bacImg1} alt="" />
          <img width={100} height={200} className="bac2" src={bacImg2} alt="" />
        </div>
      </div>
      {/* Next page */}
      <div className="next-page">
        <div className="container next__container">
          <div className="next-left">
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="next-right">
            <div className="next-card">
              <img width={72} height={72} src={ease} alt="" />
              <div className="card-tittle">
                <h6>Experienced Individuals</h6>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>

            <div className="next-card">
              <img width={72} height={72} src={enhan} alt="" />
              <div className="card-tittle">
                <h6>Experienced Individuals</h6>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="next-card">
              <img width={72} height={72} src={exper} alt="" />
              <div className="card-tittle">
                <h6>Experienced Individuals</h6>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
          </div>
          <img
            width={100}
            height={194}
            className="bac-img3"
            src={bacImg3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
