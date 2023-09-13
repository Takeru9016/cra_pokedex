import "./Header.css";
import { images } from "../../assets";

export default function Header() {
  return (
    <div className="title">
      <div className="title__left">
        <p>Pokedex</p>
        <div className="caught-seen">
          <div className="caught">
            <img
              src={images.pokeball}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>438</p>
          </div>
          <div className="seen">
            <img
              src={images.pokeball_bw}
              alt="pokeball"
              style={{ width: "30px", marginRight: "10px" }}
            />
            <p>649</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
