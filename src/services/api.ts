const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (name: string = '') => {
  try {
    const response = await fetch(`${BASE_URL}/character/?name=${name}`);
    
    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    throw error;
  }
};

export const fetchCharacterById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do personagem:", error);
    throw error;
  }
};