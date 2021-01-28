export const showAll = (character) => {
  return { 
    type: 'CHARACTERS',
    payload: character,
  }
};

export const addCharacter = (name) => {
  return {
    type: 'ADD-CHARACTER',
    payload: name,
  }
};

export const updateCharacter = (name) => {
  return {
    type: 'UPDATE-CHARACTER',
    payload: name,
  }
}

export const deleteCharacter = (name) => {
  return { 
    type: 'DELETE-CHARACTER',
    payload: name,
  }
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}
