const RickAndMortyApuURL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = async (params = {}) => {
    try {
        const response = await fetch(`${RickAndMortyApuURL}/?${new URLSearchParams(params)}`);
        if (response.status === 404) {
            return { results: [], info: null }
        }
        if (!response.ok) {
            throw new Error('Error al conectar con la API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en charactersService:', error);
        throw error;
    }
}