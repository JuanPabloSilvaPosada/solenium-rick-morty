import "./CharacterCard.css";

const CharacterCard = ({ character }) => {
  const statusClass =
    character.status?.toLowerCase() === "alive"
      ? "character-card__status--alive"
      : character.status?.toLowerCase() === "dead"
        ? "character-card__status--dead"
        : "character-card__status--unknown";

  return (
    <article className="character-card">
      <img
        src={character.image}
        alt={character.name}
        className="character-card__image"
      />
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
