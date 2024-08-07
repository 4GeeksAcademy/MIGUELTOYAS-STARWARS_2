import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const CardFavorites = ({ name, uid, type }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  let imgSrc;
  switch (type) {
    case "characters":
      imgSrc = actions.getUrlImgCharacter(uid);
      break;
    case "vehicles":
      imgSrc = actions.getUrlImgVehicle(uid);
      break;
    case "planets":
      imgSrc = actions.getUrlImgPlanet(uid);
      break;
    default:
      imgSrc = "https://placehold.co/400"; // Imagen de placeholder
  }

  return (
    <div className="card star-wars-card">
      <img
        className="card-img-top img-fluid"
        src={imgSrc}
        alt={`${name} image`}
        onClick={() => navigate(`/${type}/${uid}`)}
        style={{ cursor: "pointer" }}
      />
      <div className="card-body">
        <h5 className="card-title star-wars-title">{name}</h5>
        <div className="star-wars-card-buttons">
          <button
            type="button"
            className="star-wars-btn star-wars-btn-remove"
            onClick={() => actions.removeFromFav(uid)}
          >
            Remove from favorites
          </button>
          <button
            type="button"
            className="star-wars-btn star-wars-btn-details"
            onClick={() => navigate(`/${type}/${uid}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardFavorites;
