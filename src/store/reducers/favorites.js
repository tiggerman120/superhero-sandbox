
let initialState = {
  favorites: [
    {
      _id: "5cd99d4bde30eff6ebccfbbe",
      height: "",
      race: "Human",
      gender: "Female",
      birth: "",
      spouse: "Belemir",
      death: "",
      realm: "",
      hair: "",
      name: "Adanel",
      wikiUrl: "http://lotr.wikia.com//wiki/Adanel"
  }
  ],
  activeCategory: ''
};

const FavoritesReducers = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {

    case 'CHARACTERS':
      return { ...state, activeCategory: payload }

    case 'GET':
      return { ...state }
    
    case 'ADD-CHARACTER':
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

