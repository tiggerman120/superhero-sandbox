let initialState = {
  favorites: [],
  activeCategory: ''
};

const FavoritesReducers = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'CHARACTERS':
      return { ...state, activeCategory: payload }
    
    case 'ADD-CHARACTER':
      return { ...state, favorites: [...state.favorites, payload] }

    case 'UPDATE-CHARACTER':
      let updatedCharacter = state.favorites.map(char => {
        if (char.name === payload) {
          return { product }
        }
        return updatedCharacter;
      });
      return { ...state, favorites: updatedCharacter}
    
    case 'DELETE CHARACTER':
      return { 
        favorites: [
          ...state.favorites.filter(char => char !== payload)
        ]
      };
      default:
        return state;
  }
};