import { NavLink } from "react-router";
import "./collection-cards.css";

const Cards = ({ id, image, title, sub_title, price }) => {
  return (
    <NavLink to={`/heroine/${id}`}
      state={{id, image, title,sub_title,price}}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <div className="card">
        <div
          className="card-image"
          style={{
            background: "url('" + image + "')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="card-title">{title}</div>
        <div className="card-sub">{sub_title}</div>
        <div className="card-price">${price}</div>
      </div>
    </NavLink>
  );
};

export default Cards;
