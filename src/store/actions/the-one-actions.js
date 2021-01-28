
export const showCharacter = (name) => {
  return {
    type: 'NAME',
    payload: name,
  }
};

export const showAll = (character) => {
  return { 
    type: 'CHARACTERS',
    payload: character,
  }
};

export const showGender = (gender) => {
  return {
    type: 'GENDER',
    payload: gender,
  }
};

export const showRace = (race) => {
  return {
    type: 'RACE',
    payload: race,
  }
};

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload

export const addToFavorites = payload => {
  return{
    type: 'ADD-TO-FAVORITES',
    payload: payload,

  }
}

