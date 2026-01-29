// URL de la API de Rick and Morty
const RickAndMortyApiURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (params = {}) => {
    // Petición a la API
    try {
        const response = await fetch(`${RickAndMortyApiURL}/?${new URLSearchParams(params)}`);
        // Si la respuesta es 404, retorna un array vacío
        if (response.status === 404) {
            return { results: [], info: null }
        }
        // Si la respuesta no es ok, lanza un error
        if (!response.ok) {
            throw new Error('Error al conectar con la API');
        }
        // Se obtienen los datos de response e info (para paginación)
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en charactersService:', error);
        throw error;
    }
}