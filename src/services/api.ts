const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    const data = await response.json();
    return data.results; 
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error; 
  }
};