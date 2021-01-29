
let initialState = {
  favorites: [],
  activeCategory: ''
};

const FavoritesReducers = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'CHARACTERS':
      return { ...state, activeCategory: payload }

    case 'GET':
      let saved = JSON.parse(localStorage.getItem("favorites"));
      console.log('saved', saved);
      return { favorites: saved }
    
    case 'ADD-CHARACTER':
      console.log(state)
      localStorage.setItem("favorites", JSON.stringify([...state.favorites, payload]));
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

