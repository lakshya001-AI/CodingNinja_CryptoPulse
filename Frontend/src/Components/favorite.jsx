import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "./Context/coincontext";
import LineChart from "./LineChart/lineChart";
import { Link, useNavigate } from "react-router-dom";
import Style from "../App.module.css";
import PriceComponent from "./priceComponent";
import axios from "axios";

function Favorite() {

    const navigate = useNavigate();
    const [showUserInfo, setShowUserInfo] = useState(false);

    


  return<>
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
              <Link className={Style.linkElementNavBar} to="/currencies">
                Currencies
              </Link>
              <Link className={Style.linkElementNavBar} to="/favorite">
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
          </div>
          </div>
  </>
}

export default Favorite;