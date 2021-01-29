let initialState = {"page": [], "limit":24, 'min': 0, 'max': 24};

export const nextPage = payload => {
    console.log('inside nextPage payload', payload);
    return {
      type: 'NEXT',
      payload: payload
    }
  }

  

export default (state=initialState, action) => {
    console.log('inside pagination switchboard', action)
    let {type, payload} = action;
    console.log(type);
    switch(type) { 
        case 'NEXT':
            console.log('inside next')
            console.log('min', state.min);
            let page = payload.slice(state.min, state.max);
            console.log('page', page);
            let min = max + 1;
            let max = max + state.limit;
            return{...state, page, min, max}

        default: 
            return state;
    }
}