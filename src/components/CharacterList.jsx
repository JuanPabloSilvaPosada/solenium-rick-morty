import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

const CharacterList = ({ characters, info, currentPage, onPageChange }) => {
  if (!characters?.length) return null;

  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < info.pages;

  return (
    <div className="character-list">
      <div className="character-list__header">
        <h2 className="character-list__title">
          Personajes encontrados: {info.count}
        </h2>
        <p className="character-list__meta">
          Página {currentPage} de {info.pages ?? "?"}
        </p>
      </div>
      <ul className="character-list__grid">
        {characters.map((character) => (
          <li key={character.id} className="character-list__item">
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      {(hasPrevious || hasNext) && (
        <div className="character-list__pagination">
          {hasPrevious && (
            <button
              className="character-list__pagination-btn"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Anterior
            </button>
          )}
          {hasNext && (
            <button
              className="character-list__pagination-btn"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Siguiente
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
