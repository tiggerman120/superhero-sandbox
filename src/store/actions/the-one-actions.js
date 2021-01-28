export const getAction = payload => {
    return{
      type: 'GET',
      payload: payload
    }
  }

export const addToFavorites = payload => {
  return{
    type: 'ADD-TO-FAVORITES',
    payload: payload,
  }
}

