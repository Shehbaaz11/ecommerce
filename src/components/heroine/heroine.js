
// import {Cards} from '../new-collection/collection-cards/collection-cards'
import { useLocation } from "react-router";
import "./heroine.css";
const Items = () => {
  const location = useLocation();
  const { id, image, title, sub_title, price } = location.state || {};
  return (
    <div className="container">
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
    </div>
  );
};

export default Items;
