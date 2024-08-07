import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const Card = (props) => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const isFavorite = store.favorites.some(
    (fav) => fav.uid === props.uid && fav.type === props.type
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      actions.removeFromFav(props.uid);
    } else {
      actions.saveToFav(props.uid, props.type);
    }
  };

  return (
    <div className="star-wars-card">
      <img
        className="star-wars-card-image"
        src={props.img}
        alt={props.name}
        onClick={() => navigate(`/${props.type}/${props.uid}`)}
      />
      <div className="star-wars-card-content">
        <h3 className="star-wars-card-title">{props.name}</h3>
        <div className="star-wars-card-buttons">
          <button
            className={`star-wars-btn ${
              isFavorite ? "star-wars-btn-remove" : "star-wars-btn-add"
            }`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? "Remove from favorites" : "Add to Favorites"}
          </button>
          <button
            className="star-wars-btn star-wars-btn-details"
            onClick={() => navigate(`/${props.type}/${props.uid}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
