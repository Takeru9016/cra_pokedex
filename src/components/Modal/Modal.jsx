import "./Modal.css";
import { images } from "../../assets";

export default function Modal({
  onClick,
  id,
  name,
  image,
  type,
  height,
  weight,
  stats,
  statsName,
}) {
  return (
    <div className="modal-container">
      <div className="modal-card">
        <div onClick={onClick} className="close-button">
          X
        </div>
        <div className="modal-header">
          <img src={image} alt={name} className="modal-image" />
          <div className="modal-title">
            <p className="modal-id">No. {id}</p>
            <p className="modal-name">{name}</p>
            <img src={images.pokeball} alt="pokeball" className="pokeball" />
          </div>
        </div>
        <div className="modal-details">
          <div className="modal-info">
            <p>Type</p>
            <p>Weight</p>
            <p>Height</p>
          </div>
          <div className="modal-values">
            <p style={{ textTransform: "capitalize" }}>{type}</p>
            <p>{weight} lbs</p>
            <p>{height}0 cm</p>
          </div>
        </div>
        <div className="base-stats">
          <div>
            {statsName.map((stat, index) => (
              <p key={index} className="stats">
                {stat}
              </p>
            ))}
          </div>
          <div>
            {stats.map((stat, index) => (
              <p key={index} className="stats">
                {stat}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
