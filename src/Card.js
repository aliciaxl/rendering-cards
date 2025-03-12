import React from "react";

const images = {
    1: "/images/apple.jpg",
    2: "/images/avocado.jpg",
    3: "/images/orange.jpg"
}

export default function Card(props) {

  return props.info.map(item => (
    <ul>
        <div id={item.id} className="card">
            <img className="card--image" src={images[item.id]} alt={item.title}/><br /><br />
            <div>{item.title}</div><br />
            <div><strong>Average Cost ${item.price}</strong> / LB</div><br />
            <div>Kingdom: {item.stats.kingdom}</div><br />
            <div>Family: {item.stats.family}</div><br />
            <div>Genus: {item.stats.genus}</div><br />
            <div>Origin: {item.location}</div>
        </div>
    </ul>
  ));

}