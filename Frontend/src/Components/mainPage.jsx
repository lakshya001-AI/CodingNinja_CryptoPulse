
import React, { useState , useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Style from "../App.module.css";
import PriceComponent from "./priceComponent";
import axios from "axios";

function MainPage() {
  const navigate = useNavigate();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const[bitPrice, setBitPrice] = useState();
  const[ethPrice, setEthPrice] = useState();
  const[tetPrice, setTetPrice] = useState();
  const[binPrice, setBinPrice] = useState();

  useEffect(()=>{

    async function bitPrice(){
      const BitPrice = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=inr");
      setBitPrice(Math.floor(BitPrice.data.INR));
    }

    async function ethPrice(){
      const BitPrice = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=inr");
      setEthPrice(Math.floor(BitPrice.data.INR));
    }


    async function tetPrice(){
      const BitPrice = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=inr");
      setTetPrice(Math.floor(BitPrice.data.INR));
    }

    async function binPrice(){
      const BitPrice = await axios.get("https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=inr");
      setBinPrice(Math.floor(BitPrice.data.INR));
    }

    bitPrice();
    ethPrice();
    tetPrice();
    binPrice();

  },[]);

  console.log(bitPrice);
  console.log(ethPrice);
  
  


  function logoutUser() {
    localStorage.removeItem("authToken");
    navigate("/");
  }

  let userFirstName = localStorage.getItem("userFirstName") || "John";
  let userLastName = localStorage.getItem("userLastName") || "Doe";
  let userEmailAddress =
    localStorage.getItem("userEmailAddress") || "john.doe@example.com";

  let obj = {
    userFirstName,
    userLastName,
    userEmailAddress,
  };

  console.log(obj);

  return (
    <>
      <div className={Style.mainDiv}>
        <div className={Style.mainPageMainDiv}>
          <div className={Style.navBarMainPage}>
            <div className={Style.logoNavBarMainPage}>
              <h1>CryptoPulse</h1>
            </div>

            <div className={Style.linkNavBarMainPage}>
              <Link className={Style.linkElementNavBar} to="/mainPage">
                Home
              </Link>
              <Link className={Style.linkElementNavBar} to="#">
                Currencies
              </Link>
              <Link className={Style.linkElementNavBar} to="#">
                Favorite
              </Link>
            </div>

            <div className={Style.ProfileBtnNavBarMainPage}>
              <button
                className={Style.profileBtn}
                onClick={() => setShowUserInfo(!showUserInfo)}
              >
                Profile
              </button>

              {showUserInfo && (
                <div className={Style.userInfoDiv}>
                  <p
                    className={Style.userInfoDivPara1}
                  >{`${userFirstName} ${userLastName}`}</p>
                  <p className={Style.userInfoDivPara2}>{userEmailAddress}</p>
                  <button className={Style.logoutBtn} onClick={logoutUser}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* section 1 Main Page */}

          <div className={Style.section1MainPage}>
            <div className={Style.overlaySection1MainPage}>
              <div className={Style.overlaySection1MainPageDiv1}>
                <p className={Style.overlaySection1MainPageDiv1Para1}>
                  Stay Ahead with Real-Time Crypto Prices.
                </p>
              </div>
              <div className={Style.overlaySection1MainPageDiv2}>
                <p>
                  Discover the latest trends in cryptocurrency with our
                  user-friendly platform. Easily check prices and make informed
                  decisions to maximize your investments.
                </p>
              </div>

              <div className={Style.overlaySection1MainPageDiv3}>
                <button className={Style.exploreBtn}>Explore</button>
                <button className={Style.learnMoreBtn}>Learn More</button>
              </div>
            </div>
          </div>

          <div className={Style.section2MainPage}>

            <div className={Style.section2MainPageDiv1}>
              <p className={Style.section2MainPageDiv1Para1}>
                Discover the Ultimate 
              <span className={Style.cryptoCurrencyText}> Cryptocurrency</span> Platform for Real-Time Insights and Tracking</p>
              <p className={Style.section2MainPageDiv1Para2}>Stay ahead in the crypto market with our real-time price updates. Effortlessly manage your investments with our intuitive portfolio tracking tools.</p>
              <div className={Style.section2MainPageDiv1InnerDiv}>

                <div className={Style.section2MainPageDiv1InnerDiv1}>
                  <p className={Style.section2MainPageDiv1InnerDiv1Para1}>Price Updates</p>
                  <p className={Style.section2MainPageDiv1InnerDiv1Para2}>Get instant access to live cryptocurrency prices and never miss a market movement.</p>
                </div>

                <div className={Style.section2MainPageDiv1InnerDiv2}>
                  <p className={Style.section2MainPageDiv1InnerDiv1Para1}>Portfolio Tracking</p>
                  <p className={Style.section2MainPageDiv1InnerDiv1Para2}>Monitor your investments in real-time and make informed decisions with ease.</p>
                </div>

              </div>
            </div>

            <div className={Style.section2MainPageDiv2}>
              <div className={Style.cryptoPriceDiv}>
              <PriceComponent imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png" coin="Bitcoin" coinPrice={bitPrice}/>
        <PriceComponent imgURL="https://cryptologos.cc/logos/ethereum-eth-logo.png" coin="Ethereum" coinPrice={ethPrice}/>
        <PriceComponent imgURL="https://cryptologos.cc/logos/tether-usdt-logo.png" coin="Tether" coinPrice={tetPrice}/>
        <PriceComponent imgURL="https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png" coin="Binance Coin" coinPrice={binPrice}/>
              </div>
            </div>
     
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
