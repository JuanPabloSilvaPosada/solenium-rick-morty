import { useState } from "react";
import "./SearchForm.css";

const STORAGE_KEY = "rick-morty-recent-searches";

const loadRecentSearches = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveRecentSearches = (list) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 3)));
  } catch {}
};

const SearchForm = ({ searchCharacters, loading }) => {
  const [name, setName] = useState("");
  const [recentSearches, setRecentSearches] = useState(loadRecentSearches);

  const updateRecent = (query) => {
    const next = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 3);
    setRecentSearches(next);
    saveRecentSearches(next);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = name.trim();
    if (query) updateRecent(query);
    searchCharacters({ ...(query && { name: query }), page: 1 });
  };

  const handleQuickSearch = (query) => {
    setName(query);
    updateRecent(query);
    searchCharacters({ name: query, page: 1 });
  };

  return (
    <div className="search-form-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Buscar personaje por nombre..."
          className="search-form__input"
          disabled={loading}
        />
        <button
          type="submit"
          className="search-form__button"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      {recentSearches.length > 0 && (
        <div className="search-form__recent">
          <span className="search-form__recent-label">Búsquedas recientes:</span>
          <div className="search-form__recent-buttons">
            {recentSearches.map((query) => (
              <button
                key={query}
                type="button"
                className="search-form__recent-btn"
                onClick={() => handleQuickSearch(query)}
                disabled={loading}
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;