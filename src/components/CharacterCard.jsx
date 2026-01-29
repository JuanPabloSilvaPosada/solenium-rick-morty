import { useState } from "react";
import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const [imageError, setImageError] = useState(false);

  const statusClass =
    character.status?.toLowerCase() === "alive"
      ? "character-card__status--alive"
      : character.status?.toLowerCase() === "dead"
        ? "character-card__status--dead"
        : "character-card__status--unknown";

  return (
    <article className="character-card">
      <div className="character-card__image-wrap">
        {imageError ? (
          <div className="character-card__image-placeholder" aria-hidden>
            {character.name?.charAt(0) ?? "?"}
          </div>
        ) : (
          <img
            src={character.image}
            alt={character.name}
            className="character-card__image"
            loading="lazy"
            decoding="async"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="character-card__info">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__meta">
          <span className="character-card__label">Especie:</span>{" "}
          {character.species}
        </p>
        <p className="character-card__meta">
          <span className="character-card__label">Estado:</span>{" "}
          <span className={`character-card__status ${statusClass}`}>
            {character.status}
          </span>
        </p>
        {character.origin?.name && (
          <p className="character-card__meta">
            <span className="character-card__label">Origen:</span>{" "}
            {character.origin.name}
          </p>
        )}
      </div>
    </article>
  );
};

export default CharacterCard;
