import React, {useState} from "react";
import "./style.css";

export function IconsForm () {
    const [icons, setIcons] = useState({
        nav_item__home: "",
        nav_item__search: "",
        nav_item__notification: "",
        nav_item__favorites: "",
        nav_item__profile: ""
    })
    function handleChange(event) {
        setIcons({...icons, [event.target.name]: event.target.value})
    }
  return (
    <form>
      <nav className="menu">
          <label>
              Home
          <input checked
            type="button" 
            name="nav_item__home" 
            id="m-home" 
            value={icons.nav_item__home}
            onChange={handleChange}/>
          </label>
      
            
        <input 
            type="radio" 
            name="nav_item__search" 
            id="m-search"
            value={icons.nav_item__search}
            onChange={handleChange}/>
        <input 
            type="radio" 
            name="nav_item__notification" 
            id="m-notification"
            value={icons.nav_item__notification}
            onChange={handleChange}/>
        <input 
            type="radio" 
            name="nav_item__favorites" 
            id="m-favorites"
            value={icons.nav_item__favorites}
            onChange={handleChange}/>
        <input 
            type="radio" 
            name="nav_item__profile" 
            id="m-profile"
            value={icons.nav_item__profile}
            onChange={handleChange}/>
          <div className="selector"></div>
      </nav>
    </form>
  );
};