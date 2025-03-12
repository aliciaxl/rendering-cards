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
            <img className="card--image" src={images[item.id]} alt={item.title}/><br />
            <p>{item.title}</p>
            <p><span className="bold">Average Cost ${item.price}</span> / LB</p>
            <p>Kingdom: {item.stats.kingdom}</p>
            <p>Family: {item.stats.family}</p>
            <p>Genus: {item.stats.genus}</p>
            <p>Origin: {item.location}</p>
        </div>
    </ul>
  ));

}