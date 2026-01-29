import { useEffect } from "react";
import { useCharacterSearch } from "./hooks/useCharacterSearch";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const { characters, loading, error, info, currentPage, searchCharacters } =
    useCharacterSearch();

  useEffect(() => {
    // Cargar por defecto los primeros 20 resultados que envia la API
    searchCharacters({ page: 1 });
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Rick and Morty</h1>
        <SearchForm searchCharacters={searchCharacters} loading={loading} />
      </header>

      <section className="app__content">
        {loading && <Loader />}

        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !error && characters.length > 0 && (
          <CharacterList
            characters={characters}
            info={info}
            currentPage={currentPage}
          />
        )}
      </section>
    </div>
  );
}

export default App;
