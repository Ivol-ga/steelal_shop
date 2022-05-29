import React from "react";
import "./style.css";
import {ReactComponent as SearchIcon} from "./img/ic-search.svg";
import {ReactComponent as CloseIcon} from "./img/ic-close-input.svg";

export const Search = () => {
  return (
    <form action="" className="search">
        <input type="text" placeholder="Поиск" className="search__input" />
        <button className="search__btn">
            <SearchIcon/>
             <CloseIcon/>
        </button>
    </form>
      
    
  );
}