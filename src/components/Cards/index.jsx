import React from "react";
import "./style.css";
import data from '../../data.json';
import { Card } from "../Card";

export const Cards = () => {
  return (
    <div className="cards">
      {data.map((dataItem) => {
        return (  <Card key={`${dataItem.id}`} {...dataItem}/>)
      })}
      
        
    </div>
  );
}