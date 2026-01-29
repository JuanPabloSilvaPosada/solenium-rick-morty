import { useEffect, useState } from "react";
import { useCharacterSearch } from "./hooks/useCharacterSearch";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import SearchForm from "./components/SearchForm";
import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  const { characters, loading, error, info, currentPage, searchCharacters } =
    useCharacterSearch();
  const [currentSearch, setCurrentSearch] = useState({});

  useEffect(() => {
    // Cargar por defecto los primeros 20 resultados que envia la API
    searchCharacters({ page: 1 });
    setCurrentSearch({ page: 1 });
  }, []);

  const handleSearch = (params) => {
    setCurrentSearch(params);
    searchCharacters(params);
  };

  const handlePageChange = (page) => {
    const params = { ...currentSearch, page };
    setCurrentSearch(params);
    searchCharacters(params);
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Rick and Morty</h1>
        <SearchForm searchCharacters={handleSearch} loading={loading} />
      </header>

      <section className="app__content">
        {loading && <Loader />}

        {error && !loading && <ErrorMessage message={error} />}

        {!loading && !error && characters.length > 0 && (
          <CharacterList
            characters={characters}
            info={info}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </div>
  );
}

export default App;
