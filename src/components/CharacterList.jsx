import CharacterCard from "./CharacterCard";
import "./CharacterList.css";

const CharacterList = ({ characters, info, currentPage }) => {
  if (!characters?.length) return null;

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
    </div>
  );
};

export default CharacterList;
