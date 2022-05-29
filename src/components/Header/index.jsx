import React from "react";
import "./style.css";
import { Logo } from './../Logo/index';
import { IconsForm } from './../Icons/index';
import wa from "./img/whatsapp.png";
import tlg from "./img/telegram.png"
import { Search } from "../Search";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__wrapper container">
          <Logo />
          <div className="header__description">
            <h2 className="header__description_slogan">
              Качественная мебель на металлокарасе
            </h2>
            <Search/>
          </div>
          <div className="header__contacts">
            <p>
              <b>Наш адрес: Тэцевская, д.5</b>
            </p>
            <b>Тел: 8(843)123-45-67</b>
            <div className="header__social">
              <a
                href="https://wa.me/79171234567"
                className="header__whatsapp"
                // onclick="ym(47030628, 'reachGoal', 'whatsapp')"
                target="_blanc"
              >
                <img src={wa} alt="whatsapp" className="whatsapp__pic" />
              </a>
              <a
                href="tg://resolve?domain=@steelal"
                className="header__telegram"
                // onclick="ym(47030628, 'reachGoal', 'telegram')"
                target="_blanc"
              >
                <img src={tlg} alt="telegram" className="telegram__pic" />
              </a>
            </div>
          </div>

          {/* <IconsForm/> */}
        </div>
      </header>
    </>
  );
};
