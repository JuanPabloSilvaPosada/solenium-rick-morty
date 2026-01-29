import { useState } from "react";
import { getCharacters } from "../services/fetchingService";

// Hook para buscar personajes de la API de Rick and Morty
export const useCharacterSearch = () => {
    // Estados para la búsqueda
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // Variables para manejar la paginación
    const [info, setInfo] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const searchCharacters = async (params = {}) => {
        // Cambiar estados y limpiar errores
        setLoading(true);
        setError(null);
        setCharacters([]);

        // Tiempo de carga mínimo
        const startTime = Date.now();
        const minLoadingTime = 2000;

        try {
            const data = await getCharacters(params);

            setInfo(data.info);
            setCurrentPage(params.page || 1);

            if (data.results.length === 0) {
                setError('No se encontraron personajes');
            } else {
                setCharacters(data.results);
            }
        } catch (error) {
            setError(error.message);
        } finally {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = minLoadingTime - elapsedTime;

            if (remainingTime > 0) {
                setTimeout(() => {
                    setLoading(false);
                }, remainingTime);
            } else {
                // Al pasar 2 segundos desactiva el loader
                setLoading(false);
            }
        }
    }

    // Devolver los valores del hook
    return {
        characters,
        loading,
        error,
        info,
        currentPage,
        searchCharacters,
    }
}