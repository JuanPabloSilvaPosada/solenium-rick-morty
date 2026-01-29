import { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchCharacters, loading }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (name.trim()) params.name = name.trim();
    params.page = 1;
    searchCharacters(params);
  };

  return (
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
  );
};

export default SearchForm;