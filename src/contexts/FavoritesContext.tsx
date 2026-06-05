import React, { createContext, useReducer, ReactNode } from 'react';

type Character = {
  id: number;
  name: string;
  image: string;
};

type Action = 
  | { type: 'ADD_FAVORITE'; payload: Character }
  | { type: 'REMOVE_FAVORITE'; payload: number }; 

const favoritesReducer = (state: Character[], action: Action): Character[] => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const exists = state.find(char => char.id === action.payload.id);
      if (exists) return state;
      return [...state, action.payload];
      
    case 'REMOVE_FAVORITE':
      return state.filter(char => char.id !== action.payload);
      
    default:
      return state;
  }
};

export const FavoritesContext = createContext<{
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: number) => void;
}>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  const addFavorite = (character: Character) => {
    dispatch({ type: 'ADD_FAVORITE', payload: character });
  };

  const removeFavorite = (id: number) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}