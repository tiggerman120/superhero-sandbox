
let initialState = {
  favorites: [],
  input: '',
  activeCategory: ''
};

const FavoritesReducers = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'CHARACTERS':
      return { ...state, activeCategory: payload }
    
    case 'ADD-CHARACTER':
      console.log(state)
      return { ...state, favorites: [...state.favorites, payload] }
    
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

export default FavoritesReducers;

