import React from "react";
import "./style.css";

export const Card = ({name, price, description, picture}) => {
  return (
    <div className="card">
        <a href="#" className="card__link">
            <img src={picture} alt={description} className="card__image"/>
            <div className="card__desc">
                <span className="card__price">
                    {price}₽
                </span>
                <p className="card__name">{name}</p>
            </div>
        </a>
        <a href="#" className="card__cart btn btn _type_primary">Подробнее</a>
    </div>
  );
}